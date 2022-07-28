import React from "react";
import { Form, Button } from "react-bootstrap";
import FormTitle from "./FormTitile";
import { Link, useNavigate } from "react-router-dom";
import "./RightLogin.css";

import { connect } from "react-redux";
import { loginCompanyRequest } from "../../redux/reducers/loginCompanyReducer";

function RightLoginCompany(props) {
	const navigate = useNavigate();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	// console.log(props);

	React.useEffect(() => {
		setTimeout(() => {
			if (props?.dataCompany?.token) {
				navigate("/home");
			}
		}, 1500);
	}, [props.dataCompany]);

	const handleLoginCompany = (e) => {
		e.preventDefault();
		props.authRequestLoginCompany({ email, password });
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

						<div className="d-grid gap-2 mb-4 mt-4">
							<Button type="submit" size="lg" className="btn-warning btn-register-employee" onClick={handleLoginCompany} disabled={props.dataCompany.isLoading}>
								{props.dataCompany.isLoading ? "Loading..." : "Masuk"}
							</Button>
						</div>

					
						<p>
							Anda belum punya akun? {' '}
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
