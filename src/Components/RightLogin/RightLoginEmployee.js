import React from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import FormTitle from "./FormTitile";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./RightLogin.css";
import CryptoJS from "crypto-js";
import { useFormik } from "formik";
import * as yup from "yup";

function RightLogin() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = React.useState(false);

	const handleLogin = (values) => {
		setIsLoading(true);
		axios
			.post("https://bypass-pijar.herokuapp.com/login", {
				email: values.email,
				password: values.password,
			})
			.then((res) => {
				const data = JSON.stringify(res?.data?.user);
				let ciphertext = CryptoJS.AES.encrypt(data, process.env.REACT_APP_SECRET_KEY).toString();
				localStorage.setItem("token", res?.data?.token);
				localStorage.setItem("data", ciphertext);
				Swal.fire({
					icon: "success",
					title: "Succseed",
					text: "Berhasil Login",
				}).then((result) => (result.isConfirmed ? navigate("/") : null));
			})
			.catch((err) => {
				setIsLoading(false);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err?.response?.data,
				});
			});
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
		onSubmit: handleLogin,
	});
	return (
		<>
			<div className="col-sm-6">
				<div className="px-5 py-5">
					<FormTitle title="Halo, Pewpeople" desc="Login menggunakan akun yang telah didaftarkan" />

					<Form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit(e);
						}}
					>
						<Form.Group className="mb-3 pt-4 text-left">
							<Form.Label>E-Mail</Form.Label>
							<Form.Control id="email" type="email" size="lg" placeholder="Masukkan alamat email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
							{errors.email && touched.email ? <p style={{ color: "red" }}>{errors.email}</p> : null}
						</Form.Group>

						<Form.Group className="mb-3 text-left">
							<Form.Label>Kata Sandi</Form.Label>
							<Form.Control id="password" type="password" size="lg" placeholder="Masukkan kata sandi" value={values.password} onChange={handleChange} onBlur={handleBlur} />
							{errors.password && touched.password ? <p style={{ color: "red" }}>{errors.password}</p> : null}
						</Form.Group>

						<Link exact to="/forgot-password" className="link-forget">
							<p className="text-right">Lupa Kata Sandi?</p>
						</Link>

						<div className="d-grid gap-2 mb-4">
							<Button type="submit" size="lg" className="btn-warning btn-register-employee" disabled={isLoading}>
								{isLoading ? "Loading..." : "Masuk"}
							</Button>
						</div>

						<p>
							Anda belum punya akun?{" "}
							<Link exact to="/register" className="link-register">
								Daftar disini
							</Link>
						</p>
					</Form>
				</div>
			</div>
		</>
	);
}

export default RightLogin;
