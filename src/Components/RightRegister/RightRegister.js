import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import FormTitle from "./FormTitile";
import { Link } from "react-router-dom";
import "./RightRegister.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

import axios from "axios";

function RightRegister() {
	const navigate = useNavigate();
	const [nama, setNama] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPass, setConfirmPass] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [msgErr, setMsgErr] = React.useState("");
	const [isError, setIsError] = React.useState(false);

	const handleRegister = () => {
		setIsLoading(true);
		axios
			.post("https://bypass-pijar.herokuapp.com/user/add", {
				name: nama,
				email,
				phone_number: phone,
				password,
				confirm_pass: confirmPass,
			})
			.then((res) => {
				Swal.fire({
					icon: "success",
					title: "Succseed",
					text: res?.data,
				}).then((result) => (result.isConfirmed ? navigate("/login") : null));
			})
			.catch((err) => {
				setIsLoading(false);
				setMsgErr(err?.response?.data);
				setIsError(true);
			});
	};
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

					<Form onSubmit={(e) => e.preventDefault()}>
						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>Nama</Form.Label>
							<Form.Control type="text" size="md" placeholder="Masukkan nama panjang" value={nama} onChange={(e) => setNama(e.target.value)} />
						</Form.Group>

						<Form.Group className="mb-3 pt-2 text-left">
							<Form.Label>E-mail</Form.Label>
							<Form.Control type="text" size="md" placeholder="Masukkan alamat email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
							<Button type="submit" size="md" className="btn-warning btn-login" onClick={handleRegister} disabled={isLoading}>
								{isLoading ? "Loading..." : "Daftar"}
							</Button>
						</div>

						<p>
							Anda sudah punya akun?
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
