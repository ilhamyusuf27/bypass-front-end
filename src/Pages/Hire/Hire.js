import React from "react";

import { Button, Badge, Form } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import axios from "../../Axios/Axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

import employeeImg from "../../Assets/Images/profile image example.jpeg";
import { useParams } from "react-router";

import { connect } from "react-redux";

function Hire(props) {
	const navigate = useNavigate();

	const [job, setJob] = React.useState("");
	const [profile, setProfile] = React.useState([]);
	const [skill, setSkill] = React.useState([]);
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [desc, setDesc] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const { id } = useParams();

	React.useEffect(() => {
		if (!props?.dataCompany?.profile?.role || !localStorage.getItem("token")) {
			navigate("/");
		}
	}, []);

	React.useEffect(() => {
		axios.get(`/getAllData/findByID?id=${id}`).then((res) => {
			setProfile(res?.data?.allData[0]);
		});
		axios.get(`/skill/findByIdUser?id_user=${id}`).then((res) => {
			setSkill(res?.data?.user);
		});
	}, []);

	const handleHire = (e) => {
		e.preventDefault();
		setIsLoading(true);
		axios
			.post("/hire/add", {
				hire_message: job,
				hire_name: name,
				hire_email: email,
				hire_phone: phone,
				hire_description: desc,
				id,
				recruiter_id: props?.dataCompany?.profile?.recruiter_id,
			})
			.then((res) => {
				setIsLoading(false);
				Swal.fire({
					icon: "success",
					title: "Succseed",
					text: "Lowongan sudah dikirim",
				}).then((result) => (result.isConfirmed ? navigate("/home") : null));
			})
			.catch(() => {
				setIsLoading(false);
				Swal.fire({
					icon: "error",
					title: "Gagal",
					text: "Gagal hire",
				});
			});
	};

	return (
		<>
			<div className="wrapper-home mb-5">
				<div className="row mt-5">
					<div className="col-4">
						<div className="card">
							<div className="text-center">
								<img src={profile?.user_photo ?? employeeImg} className="card-img-top profile-employee-img" alt="..." />
							</div>
							<div className="card-body mb-3">
								<h5 className="card-title">{profile?.name}</h5>
								<p>{profile?.job_title}</p>
								<p className="card-text">
									<small className="text-muted">
										<GoLocation /> {profile?.address ?? "Location"}
									</small>
								</p>
								<small className="text-muted">{profile?.job_type}</small>
								<p className="card-text">
									<small className="text-muted">{profile?.description}</small>
								</p>
								<div className="skills-badge-employee mt-4">
									<h5>Skills</h5>
									{skill.map((item) => (
										<span className="skills-badge-home">
											<Badge bg="warning">{item?.skill}</Badge>
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="col-6 ms-5">
						<h2>Hubungi {profile.name}</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
						<Form>
							<Form.Group className="mb-4" controlId="formBasicEmail">
								<Form.Text className="text-muted">Tujuan tentang pesan ini</Form.Text>
								<Form.Select aria-label="Default select example" size="lg" onChange={(e) => setJob(e.target.value)}>
									<option disabled>Pilihan</option>
									<option value="Project">Project</option>
									<option value="Job-Offer">Job-Offer</option>
								</Form.Select>
							</Form.Group>

							<Form.Group className="mb-4" controlId="fullname">
								<Form.Text className="text-muted">Nama Lengkap</Form.Text>
								<Form.Control type="text" placeholder="Masukan nama lengkap" size="lg" value={name} onChange={(e) => setName(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-4" controlId="email">
								<Form.Text className="text-muted">Email</Form.Text>
								<Form.Control type="email" placeholder="Masukan email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-4" controlId="phone-number">
								<Form.Text className="text-muted">No Handphone</Form.Text>
								<Form.Control type="email" placeholder="Masukan no handphone" size="lg" value={phone} onChange={(e) => setPhone(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
								<Form.Text className="text-muted">Deskripsi</Form.Text>
								<Form.Control as="textarea" rows={8} placeholder="Deskripsikan/jelaskan lebih detail" size="lg" value={desc} onChange={(e) => setDesc(e.target.value)} />
							</Form.Group>

							<div className="d-grid gap-2">
								<Button variant="warning" size="lg" className="text-light" onClick={handleHire} disabled={isLoading}>
									{isLoading ? "Loading" : "Hire"}
								</Button>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => ({
	dataCompany: state?.loginCompany,
});

const mapDispatchToProp = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProp)(Hire);
