import React from "react";
import { Form, Button } from "react-bootstrap";
import FormTitle from "./FormTitile";
import { Link, useNavigate } from "react-router-dom";
import "./RightRegister.css";
import axios from "axios";
import Swal from "sweetalert2";

import { useFormik } from "formik";
import * as yup from "yup";

function RightLogin() {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = React.useState(false);

	const handleRegisterCompany = (values) => {
		setIsLoading(true);

		axios
			.post("https://bypass-pijar.herokuapp.com/company/add", {
				recruiter_name: values.name,
				recruiter_email: values.email,
				company_name: values.company,
				recruiter_position: values.position,
				recruiter_phone: values.phone,
				recruiter_password: values.password,
				confirm_pass: values.confirmPass,
			})
			.then((res) => {
				console.log(res);
				Swal.fire({
					icon: "success",
					title: "Succseed",
					text: res?.data,
				}).then((result) => (result.isConfirmed ? navigate("/company-login") : null));
			})
			.catch((err) => {
				setIsLoading(false);
				Swal.fire({
					icon: "error",
					title: "Register Failed",
					text: err?.response?.data,
				});
			});
	};

	const registerSchema = yup.object().shape({
		name: yup.string().required("Required"),
		company: yup.string().required("Required"),
		position: yup.string().required("Required"),
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
			company: "",
			position: "",
			phone: "",
			password: "",
			confirmPass: "",
		},
		validationSchema: registerSchema,
		onSubmit: handleRegisterCompany,
	});

	return (
		<>
			<div className="col-sm-6 col-lg-6 col-md-6 col-xl-6">
				<div className="px-5 py-5">
					<FormTitle title="Halo, Pewpeople" desc="Daftar sekarang, dapatkan talent yang sesuai." />

					<Form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit(e);
						}}
					>
						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>Nama</Form.Label>
							<Form.Control id="name" type="text" size="md" placeholder="Masukkan nama panjang" value={values.name} onChange={handleChange} onBlur={handleBlur} />
							{/* <p>test</p> */}
							{errors.name && touched.name ? <p style={{ color: "red" }}>{errors.name}</p> : null}
						</Form.Group>

						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>E-mail</Form.Label>
							<Form.Control id="email" type="email" size="md" placeholder="Masukkan alamat email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
							{errors.email && touched.email ? <p style={{ color: "red" }}>{errors.email}</p> : null}
						</Form.Group>

						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>Perusahaan</Form.Label>
							<Form.Control id="company" type="text" size="md" placeholder="Masukkan nama perusahaan" value={values.company} onChange={handleChange} onBlur={handleBlur} />
							{errors.company && touched.company ? <p style={{ color: "red" }}>{errors.company}</p> : null}
						</Form.Group>

						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>Jabatan</Form.Label>
							<Form.Control id="position" type="text" size="md" placeholder="Posisi di perusahaan anda" value={values.position} onChange={handleChange} onBlur={handleBlur} />
							{errors.position && touched.position ? <p style={{ color: "red" }}>{errors.position}</p> : null}
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
							<Link exact to="/company-login" className="link-register">
								Masuk disini
							</Link>
						</p>
					</Form>
				</div>
			</div>
		</>
	);
}

export default RightLogin;
