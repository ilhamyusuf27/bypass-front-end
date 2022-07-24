import React from "react";
import { Form, Button } from "react-bootstrap";
import FormTitle from "./FormTitile";
import { Link, useNavigate } from "react-router-dom";
import "./RightLogin.css";
import axios from "../../Axios/Axios";
import Swal from "sweetalert2";
import { connect } from "react-redux";

function RightLoginCompany(props) {
	console.log(props);
	const navigate = useNavigate();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [isLoading, setIsloading] = React.useState(false);

	const handleLoginCompany = (e) => {
		e.preventDefault();
		setIsloading(true);
		axios
			.post("/company/login", {
				recruiter_email: email,
				recruiter_password: password,
			})
			.then((res) => {
				// localStorage.setItem("token", res.data.token);
				// localStorage.setItem("data", JSON.stringify(res.data.data));
				props.setToken(res?.data?.token);
				props.setProfile(res?.data?.data);
				console.log(props);
				// navigate("/home");
			})
			.catch((err) => {
				setIsloading(false);
				Swal.fire({
					icon: "error",
					title: "Login Failed",
					text: err?.response?.data,
				});
			});
	};

	return (
		<>
			<div className="col-sm-6">
				<div className="px-5 py-5">
					<FormTitle title="Halo, Pewpeople" desc="Login menggunakan akun yang telah didaftarkan" />

					<Form>
						<Form.Group className="mb-3 pt-4 text-left">
							<Form.Label>E-Mail</Form.Label>
							<Form.Control type="email" size="lg" placeholder="Masukkan alamat email" value={email} onChange={(e) => setEmail(e.target.value)} />
						</Form.Group>

						<Form.Group className="mb-3 text-left">
							<Form.Label>Kata Sandi</Form.Label>
							<Form.Control type="password" size="lg" placeholder="Masukkan kata sandi" value={password} onChange={(e) => setPassword(e.target.value)} />
						</Form.Group>

						<Link exact to="/forgot-password" className="link-forget">
							<p className="text-right">Lupa Kata Sandi?</p>
						</Link>

						<div className="d-grid gap-2 mb-4">
							<Button type="submit" size="md" className="btn-warning btn-login" onClick={handleLoginCompany} disabled={isLoading}>
								{isLoading ? "Loading..." : "Masuk"}
							</Button>
						</div>

						<p>
							Anda belum punya akun?
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

const mapStateToProps = (state) => ({
	authData: state?.loginCompany,
});

const mapDispatchToProp = (dispatch) => ({
	setToken: (data) => dispatch({ type: "SET_TOKEN", data: data }),
	setProfile: (data) => dispatch({ type: "SET_PROFILE", data: data }),
});

export default connect(mapStateToProps, mapDispatchToProp)(RightLoginCompany);
