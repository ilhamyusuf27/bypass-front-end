import React from "react";
import { Form, Button } from "react-bootstrap";
import FormTitle from "./FormTitile";
import { Link } from "react-router-dom";
import "./RightRegister.css";

function RightLogin() {
  return (
    <>
      <div className="col-sm-6 col-lg-6 col-md-6 col-xl-6">
        <div className="px-5 py-5">
          <FormTitle
            title="Halo, Pewpeople"
            desc="Daftar sekarang, dapatkan talent yang sesuai."
          />

          <Form>
            <Form.Group className="mb-3 pt-2 text-left">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                size="md"
                placeholder="Masukkan nama panjang"
              />
            </Form.Group>
            
            <Form.Group className="mb-3 pt-2 text-left">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                size="md"
                placeholder="Masukkan alamat email"
              />
            </Form.Group>

            <Form.Group className="mb-3 pt-2 text-left">
              <Form.Label>Perusahaan</Form.Label>
              <Form.Control
                type="text"
                size="md"
                placeholder="Masukkan nama perusahaan"
              />
            </Form.Group>

            <Form.Group className="mb-3 pt-2 text-left">
              <Form.Label>Jabatan</Form.Label>
              <Form.Control
                type="text"
                size="md"
                placeholder="Posisi di perusahaan anda"
              />
            </Form.Group>
            
            <Form.Group className="mb-3 pt-2 text-left">
              <Form.Label>No handphone</Form.Label>
              <Form.Control
                type="text"
                size="md"
                placeholder="Masukkan no handphone"
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
            
            <Form.Group className="mb-3 text-left">
              <Form.Label>Konfirmasi kata Sandi</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Masukkan konfirmasi kata sandi"
              />
            </Form.Group>

            <div className="d-grid gap-2 mb-4">
              <Button type="submit" size="md" className="btn-warning btn-login">
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
