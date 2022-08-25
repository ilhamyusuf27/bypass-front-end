/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Form, Button } from "react-bootstrap";
import FormTitle from "./FormTitile";
import { Link, useNavigate } from "react-router-dom";
import "./RightLogin.css";

import { connect } from "react-redux";
import { loginCompanyRequest } from "../../redux/reducers/loginCompanyReducer";
import { useFormik } from "formik";
import * as yup from "yup";

function RightLoginCompany(props) {
	const navigate = useNavigate();

	const onSubmit = (values) => {
		props.authRequestLoginCompany({ email: values?.email, password: values?.password });
	};

	const loginSchema = yup.object().shape({
		email: yup.string().email("Please enter a valid email").required("Required"),
		password: yup.string().min(6).max(20).required("Required"),
	});

	const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginSchema,
		onSubmit,
	});

	React.useEffect(() => {
		setTimeout(() => {
			if (props?.dataCompany?.token) {
				navigate("/home");
			}
		}, 1500);
	}, [props.dataCompany]);

	return (
		<>
			<div className="col-sm-6">
				<div className="px-5 py-5">
					<FormTitle title="Halo, Pewpeople" desc="Login menggunakan akun yang telah didaftarkan" />

					<Form
						id="formInput"
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit(e);
						}}
					>
						<Form.Group className="mb-3 pt-4 text-left">
							<Form.Label>E-Mail</Form.Label>
							<Form.Control type="email" id="email" size="lg" placeholder="Masukkan alamat email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
							{errors.email && touched.email ? <p style={{ color: "red" }}>{errors.email}</p> : null}
						</Form.Group>

						<Form.Group className="mb-3 text-left">
							<Form.Label>Kata Sandi</Form.Label>
							<Form.Control type="password" id="password" size="lg" placeholder="Masukkan kata sandi" value={values?.password} onChange={handleChange} onBlur={handleBlur} />
							{errors.password && touched.password ? <p style={{ color: "red" }}>{errors.password}</p> : null}
						</Form.Group>

						<Link exact to="/forgot-password" className="link-forget">
							<p className="text-right">Lupa Kata Sandi?</p>
						</Link>

						<div className="d-grid gap-2 mb-4 mt-4">
							<Button type="submit" size="lg" className="btn-warning btn-register-employee" disabled={props.dataCompany.isLoading}>
								{props.dataCompany.isLoading ? "Loading..." : "Masuk"}
							</Button>
						</div>

						<p>
							Anda belum punya akun?{" "}
							<Link exact to="/register-company" className="link-register">
								Daftar disini
							</Link>
						</p>
					</Form>
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => ({
	dataCompany: state?.loginCompany,
});

const mapDispatchToProp = (dispatch) => ({
	authRequestLoginCompany: (data) => dispatch(loginCompanyRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProp)(RightLoginCompany);
