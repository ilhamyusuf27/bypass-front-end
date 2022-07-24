import React from "react";
import {
  Container,
  Row,
  Button,
  Card,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import Swal from "sweetalert2";
import { BiMap } from "react-icons/bi";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./EditProfileCompany.css";

const EditProfileCompany = () => {
  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("data"));
  const rec_id = data.recruiter_id;

  const getUpdateCompany = () => {
    axios
      .get(
        `${process.env.REACT_APP_URL_API}/company/find/id?recruiter_id=${rec_id}`
      )
      .then((res) => {
        localStorage.setItem("data", JSON.stringify(res?.data?.company[0]));
      })
      .catch((err) => console.log(err));
  };

  const [email, setEmail] = React.useState(data.recruiter_email);
  const [rec_photo, setRec_photo] = React.useState(data.recruiter_photo);
  const [name, setName] = React.useState(data.company_name);
  const [business_fields, setBusinessField] = React.useState(data.business_fields);
  const [city, setCity] = React.useState(data.company_city);
  const [description, setDescription] = React.useState(data.company_description);
  const [instagram, setInstagram] = React.useState(data.company_instagram);
  const [phone, setPhone] = React.useState(data.recruiter_phone);
  const [linkedin, setLinkedin] = React.useState(data.company_linkedin);
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const handleSimpan = () => {
    const token = localStorage.getItem("token_almnk");
        
    setIsLoading(true);

    axios
      .patch("https://bypass-pijar.herokuapp.com/company/edit", {
        recruiter_id: rec_id,
        company_name: name,
        business_fields,
        company_city: city,
        company_description: description,
        recruiter_email: email,
        company_instagram: instagram,
        recruiter_phone: phone,
        company_linkedin: linkedin,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Succseed",
          text: "Berhasil Diubah",
        }).then((result) => (result.isConfirmed ? navigate("/profile-company/") : null)).then(getUpdateCompany());
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
      <Container fluid className="bg-shadow" />
      <Container className="mb-5 c-top">
        <Row>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card className="card hovercard mt-5">
              <div className="avatar">
                <img
                  src={
                    rec_photo ??
                    "https://us.123rf.com/450wm/solarus/solarus2112/solarus211200026/178493166-default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available-.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="info m-3">
                <div className="title left">
                  <h4>{name}</h4>
                  <small>{business_fields ?? "-"}</small>
                  <div className="desc mt-2">
                    <BiMap /> {city ?? "-"}
                  </div>
                </div>
              </div>
            </Card>

            
            <div className="d-grid gap-2">
              <Button
                type="submit"
                size="lg"
                className="button-edit mb-2"
                onClick={handleSimpan}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Simpan"}
              </Button>
            </div>
            <Link exact to="/profile-company" className="text-none">
              <div className="d-grid gap-2">
                <Button variant="outline-secondary" size="lg">
                  Batal
                </Button>
              </div>
            </Link>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <Card className="mt-5">
              <Card.Header as="h5">Data diri</Card.Header>
              <Card.Body>
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nama Perusahaan</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      placeholder="Masukkan nama perusahaan"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Bidang</Form.Label>
                    <Form.Control
                      type="text"
                      value={business_fields}
                      placeholder="Masukkan bidang perusahaan ex: Financial"
                      onChange={(e) => setBusinessField(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Kota</Form.Label>
                    <Form.Control
                      type="text"
                      value={city}
                      placeholder="Masukkan kota"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Deskripsi singkat</Form.Label>
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Tuliskan deskripsi singkat"
                    >
                      <Form.Control
                        as="textarea"
                        value={description}
                        placeholder="Tuliskan deskripsi singkat"
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      placeholder="Masukkan email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Instagram</Form.Label>
                    <Form.Control
                      type="text"
                      value={instagram}
                      placeholder="Masukkan nama instagram"
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Nomor Telepon</Form.Label>
                    <Form.Control
                      type="text"
                      value={phone}
                      placeholder="Masukkan nomor telepon"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-5">
                    <Form.Label>Linkedin</Form.Label>
                    <Form.Control
                      type="text"
                      value={linkedin}
                      placeholder="Masukkan nama Linkedin"
                      onChange={(e) => setLinkedin(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default EditProfileCompany;
