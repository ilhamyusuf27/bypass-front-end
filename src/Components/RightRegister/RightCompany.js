import React from "react";
import { Form, Button } from "react-bootstrap";
import FormTitle from "./FormTitile";
import { Link, useNavigate } from "react-router-dom";
import "./RightRegister.css";
import axios from "axios";
import Swal from "sweetalert2";

function RightLogin() {
	const navigate = useNavigate();
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [companyName, setCompanyName] = React.useState("");
	const [position, setPosition] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPass, setConfirmPass] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);

	const handleRegisterCompany = (e) => {
		e.preventDefault();
		setIsLoading(true);

		axios
			.post("https://bypass-pijar.herokuapp.com/company/add", {
				recruiter_name: name,
				recruiter_email: email,
				company_name: companyName,
				recruiter_position: position,
				recruiter_phone: phone,
				recruiter_password: password,
				confirm_pass: confirmPass,
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

	return (
		<>
			<div className="col-sm-6 col-lg-6 col-md-6 col-xl-6">
				<div className="px-5 py-5">
					<FormTitle title="Halo, Pewpeople" desc="Daftar sekarang, dapatkan talent yang sesuai." />
					{/* {isError ? (
						<Alert key="danger" variant="danger">
							{msgErr}
						</Alert>
					) : null} */}

					<Form>
						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>Nama</Form.Label>
							<Form.Control type="text" size="md" placeholder="Masukkan nama panjang" value={name} onChange={(e) => setName(e.target.value)} />
						</Form.Group>

						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>E-mail</Form.Label>
							<Form.Control type="email" size="md" placeholder="Masukkan alamat email" value={email} onChange={(e) => setEmail(e.target.value)} />
						</Form.Group>

						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>Perusahaan</Form.Label>
							<Form.Control type="text" size="md" placeholder="Masukkan nama perusahaan" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
						</Form.Group>

						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>Jabatan</Form.Label>
							<Form.Control type="text" size="md" placeholder="Posisi di perusahaan anda" value={position} onChange={(e) => setPosition(e.target.value)} />
						</Form.Group>

						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>No handphone</Form.Label>
							<Form.Control type="text" size="md" placeholder="Masukkan no handphone" value={phone} onChange={(e) => setPhone(e.target.value)} />
						</Form.Group>

						<Form.Group className="mb-3 text-left">
							<Form.Label>Kata Sandi</Form.Label>
							<Form.Control type="password" size="lg" placeholder="Masukkan kata sandi" value={password} onChange={(e) => setPassword(e.target.value)} />
						</Form.Group>

						<Form.Group className="mb-3 text-left">
							<Form.Label>Konfirmasi kata Sandi</Form.Label>
							<Form.Control type="password" size="lg" placeholder="Masukkan konfirmasi kata sandi" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
						</Form.Group>

						<div className="d-grid gap-2 mb-4">
							<Button type="submit" size="md" className="btn-warning btn-login" onClick={handleRegisterCompany} disabled={isLoading}>
								{isLoading ? "Loading..." : "Daftar"}
							</Button>
						</div>

						<p>
							Anda sudah punya akun?
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
