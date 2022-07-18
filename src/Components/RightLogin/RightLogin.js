import React from "react";
import { Form, Button } from "react-bootstrap";
import FormTitle from "./FormTitile";
import { Link } from "react-router-dom";
import "./RightLogin.css";

function RightLogin() {
  return (
    <>
      <div className="col-sm-6">
        <div className="px-5 py-5">
          <FormTitle
            title="Halo, Pewpeople"
            desc="Login menggunakan akun yang telah didaftarkan"
          />

          <Form>
            <Form.Group className="mb-3 pt-4 text-left">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                placeholder="Masukkan alamat email"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-left">
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Masukkan kata sandi"
              />
            </Form.Group>

            <Link exact to="/forgot-password" className="link-forget">
              <p className="text-right">Lupa Kata Sandi?</p>
            </Link>

            <div className="d-grid gap-2 mb-4">
              <Button type="submit" size="md" className="btn-warning btn-login">
                Masuk
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

export default RightLogin;
