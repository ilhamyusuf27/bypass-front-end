import React from "react";

import { Button, Badge, Form } from "react-bootstrap";
import { GoLocation } from "react-icons/go";

import employeeImg from "../../Assets/Images/profile image example.jpeg";

function Hire() {
	return (
		<>
			<div className="wrapper-home mb-5">
				<div className="row mt-5">
					<div className="col-4">
						<div className="card">
							<div className="text-center">
								<img src={employeeImg} className="card-img-top profile-employee-img" alt="..." />
							</div>
							<div className="card-body">
								<h5 className="card-title">Louis Tomlinson</h5>
								<p>Web Developer</p>
								<p className="card-text">
									<small className="text-muted">
										<GoLocation /> Purwokerto, Jawa Tengah
									</small>
								</p>
								<small className="text-muted">Freelancer</small>
								<p className="card-text">
									<small className="text-muted">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
									</small>
								</p>
								<div className="skills-badge-employee mt-4">
									<h5>Skills</h5>
									<span className="skills-badge-home">
										<Badge bg="warning">PHP</Badge>
									</span>
									<span className="skills-badge-home">
										<Badge bg="warning">JavaScript</Badge>
									</span>
									<span className="skills-badge-home">
										<Badge bg="warning">HTML</Badge>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-6 ms-5">
						<h2>Hubungi Lous Tomlinson</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
						<Form>
							<Form.Group className="mb-4" controlId="formBasicEmail">
								<Form.Text className="text-muted">Tujuan tentang pesan ini</Form.Text>
								<Form.Select aria-label="Default select example" size="lg">
									<option>Project</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Form.Group>

							<Form.Group className="mb-4" controlId="fullname">
								<Form.Text className="text-muted">Nama Lengkap</Form.Text>
								<Form.Control type="text" placeholder="Masukan nama lengkap" size="lg" />
							</Form.Group>

							<Form.Group className="mb-4" controlId="email">
								<Form.Text className="text-muted">Email</Form.Text>
								<Form.Control type="email" placeholder="Masukan email" size="lg" />
							</Form.Group>

							<Form.Group className="mb-4" controlId="phone-number">
								<Form.Text className="text-muted">No Handphone</Form.Text>
								<Form.Control type="email" placeholder="Masukan no handphone" size="lg" />
							</Form.Group>

							<Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
								<Form.Text className="text-muted">Deskripsi</Form.Text>
								<Form.Control as="textarea" rows={8} placeholder="Deskripsikan/jelaskan lebih detail" size="lg" />
							</Form.Group>

							<div className="d-grid gap-2">
								<Button variant="warning" size="lg" className="text-light">
									Hire
								</Button>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hire;
