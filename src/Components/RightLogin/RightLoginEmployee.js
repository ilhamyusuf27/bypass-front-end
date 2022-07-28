import React from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import FormTitle from "./FormTitile";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./RightLogin.css";
import CryptoJS from "crypto-js";

function RightLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [msgErr, setMsgErr] = React.useState("");
  const [isError, setIsError] = React.useState(false);

	const handleLogin = () => {
		setIsLoading(true);
		axios
			.post("https://bypass-pijar.herokuapp.com/login", {
				email,
				password,
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
				setIsError(true);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err?.response?.data,
				});
			});
	};
	return (
		<>
			<div className="col-sm-6">
				<div className="px-5 py-5">
					<FormTitle title="Halo, Pewpeople" desc="Login menggunakan akun yang telah didaftarkan" />

          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3 pt-4 text-left">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                placeholder="Masukkan alamat email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 text-left">
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Link exact to="/forgot-password" className="link-forget">
              <p className="text-right">Lupa Kata Sandi?</p>
            </Link>

            <div className="d-grid gap-2 mb-4">
              <Button
                type="submit"
                size="lg"
                className="btn-warning btn-register-employee"
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Masuk"}
              </Button>
            </div>

            <p>
              Anda belum punya akun? {' '}
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
