import React from "react";
import { Form, Button } from "react-bootstrap";
import FormTitle from "./FormTitile";
import { Link } from "react-router-dom";
import "./RightRegister.css";
import axios from "axios";

function RightLogin() {
	const [nama, setNama] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPass, setConfirmPass] = React.useState("");

	const handleRegister = (e) => {
		e.preventDefault();

		axios.post("https://bypass-pijar.herokuapp.com/user/add", {
			name: nama,
			email,
			phone_number: phone,
			password,
			confirm_pass: confirmPass,
		}).then((res) => );
	};
	return (
		<>
			<div className="col-sm-6 col-lg-6 col-md-6 col-xl-6">
				<div className="px-5 py-5">
					<FormTitle title="Halo, Pewpeople" desc="Daftar sekarang, dapatkan kesempatan hiring perusahaan impian." />

					<Form>
						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>Nama</Form.Label>
							<Form.Control type="text" size="md" placeholder="Masukkan nama panjang" value={nama} onChange={setNama} />
						</Form.Group>

						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>E-mail</Form.Label>
							<Form.Control type="text" size="md" placeholder="Masukkan alamat email" value={email} onChange={setEmail} />
						</Form.Group>

						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>No handphone</Form.Label>
							<Form.Control type="text" size="md" placeholder="Masukkan no handphone" value={phone} onChange={setPhone} />
						</Form.Group>

						<Form.Group className="mb-3 text-left">
							<Form.Label>Kata Sandi</Form.Label>
							<Form.Control type="password" size="lg" placeholder="Masukkan kata sandi" value={password} onChange={setPassword} />
						</Form.Group>

						<Form.Group className="mb-3 text-left">
							<Form.Label>Konfirmasi kata Sandi</Form.Label>
							<Form.Control type="password" size="lg" placeholder="Masukkan konfirmasi kata sandi" value={confirmPass} onChange={setConfirmPass} />
						</Form.Group>

						<div className="d-grid gap-2 mb-4">
							<Button type="submit" size="md" className="btn-warning btn-login" onClick={handleRegister}>
								Daftar
							</Button>
						</div>

						<p>
							Anda sudah punya akun?
							<Link exact to="/register" className="link-register">
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
