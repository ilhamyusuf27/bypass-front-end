import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import FormTitle from "./FormTitile";
import { Link } from "react-router-dom";
import "./RightRegister.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import axios from "axios";

function RightRegister() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = React.useState(false);
	const [msgErr, setMsgErr] = React.useState("");
	const [isError, setIsError] = React.useState(false);

	const handleRegister = (values) => {
		setIsLoading(true);
		axios
			.post("https://bypass-pijar.herokuapp.com/user/add", {
				name: values.name,
				email: values.email,
				phone_number: values.phone,
				password: values.password,
				confirm_pass: values.confirmPass,
			})
			.then((res) => {
				Swal.fire({
					icon: "success",
					title: "Succseed",
					text: res?.data,
				}).then((result) => (result.isConfirmed ? navigate("/employee-login") : null));
			})
			.catch((err) => {
				setIsLoading(false);
				setMsgErr(err?.response?.data);
				setIsError(true);
			});
	};

	const registerSchema = yup.object().shape({
		name: yup.string().required("Required"),
		phone: yup.string().max(14, "Phone number cannot be more than 14 digits").required("Required"),
		email: yup.string().email("Please enter a valid email").required("Required"),
		password: yup.string().min(6).max(20).required("Required"),
		confirmPass: yup
			.string()
			.oneOf([yup.ref("password"), null], "Password must match")
			.required("Required"),
	});

	const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			password: "",
			confirmPass: "",
		},
		validationSchema: registerSchema,
		onSubmit: handleRegister,
	});
	return (
		<>
			<div className="col-sm-6 col-lg-6 col-md-6 col-xl-6">
				<div className="px-5 py-5">
					<FormTitle title="Halo, Pewpeople" desc="Daftar sekarang, dapatkan kesempatan hiring perusahaan impian." />
					{isError ? (
						<Alert key="danger" variant="danger">
							{msgErr}
						</Alert>
					) : null}

					<Form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit(e);
						}}
					>
						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>Nama</Form.Label>
							<Form.Control id="name" type="text" size="md" placeholder="Masukkan nama panjang" value={values.name} onChange={handleChange} onBlur={handleBlur} />
							{errors.name && touched.name ? <p style={{ color: "red" }}>{errors.name}</p> : null}
						</Form.Group>

						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>E-mail</Form.Label>
							<Form.Control id="email" type="text" size="md" placeholder="Masukkan alamat email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
							{errors.email && touched.email ? <p style={{ color: "red" }}>{errors.email}</p> : null}
						</Form.Group>

						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>No handphone</Form.Label>
							<Form.Control id="phone" type="text" size="md" placeholder="Masukkan no handphone" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
							{errors.phone && touched.phone ? <p style={{ color: "red" }}>{errors.phone}</p> : null}
						</Form.Group>

						<Form.Group className="mb-3 text-left">
							<Form.Label>Kata Sandi</Form.Label>
							<Form.Control id="password" type="password" size="md" placeholder="Masukkan kata sandi" value={values.password} onChange={handleChange} onBlur={handleBlur} />
							{errors.password && touched.password ? <p style={{ color: "red" }}>{errors.password}</p> : null}
						</Form.Group>

						<Form.Group className="mb-3 text-left">
							<Form.Label>Konfirmasi kata Sandi</Form.Label>
							<Form.Control id="confirmPass" type="password" size="md" placeholder="Masukkan konfirmasi kata sandi" value={values.confirmPass} onChange={handleChange} onBlur={handleBlur} />
							{errors.confirmPass && touched.confirmPass ? <p style={{ color: "red" }}>{errors.confirmPass}</p> : null}
						</Form.Group>

						<div className="d-grid gap-2 mb-4 mt-4">
							<Button type="submit" size="md" className="btn-warning btn-register-employee" disabled={isLoading}>
								{isLoading ? "Loading..." : "Daftar"}
							</Button>
						</div>

						<p>
							Anda sudah punya akun?{" "}
							<Link exact to="/employee-login" className="link-register">
								Masuk disini
							</Link>
						</p>
					</Form>
				</div>
			</div>
		</>
	);
}

export default RightRegister;

// const mapStateToProps = (state) => ({
// 	registerData: state?.register,
// });

// const mapDispatchToProp = (dispatch) => ({});

// export default connect(mapStateToProps, mapDispatchToProp)(RightRegister);
