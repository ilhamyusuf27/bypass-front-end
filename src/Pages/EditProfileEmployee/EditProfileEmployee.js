import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Form, Spinner } from "react-bootstrap";
import DatePicker from "react-datepicker";
import moment from "moment";
import "./EditProfileEmployee.css";
import { GoLocation } from "react-icons/go";
import { MdModeEditOutline } from "react-icons/md";
import axios from "axios";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import SkillsUserEmployee from "../../Components/SkillsUserEmployee/SkillsUserEmployee";
import { Link } from "react-router-dom";

const EditProfileEmployee = () => {
	const [experience, setExperience] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [show, setShow] = useState(false);
	const [dataEmployee, setDataEmployee] = useState([]);
	const [detailEmployee, setDetailEmployee] = useState([]);
	const [msgError, setMsgError] = useState("");
	const [skills, setSkills] = useState([]);
	const [descriptionExperience, setDescriptionExperience] = useState("");
	const [position, setPosition] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const [addSkill, setAddSkill] = useState("");
	const [addExperience, setAddExperience] = useState([]);
	const [namePortofolio, setNamePortofolio] = useState("");
	const [linkPortofolio, setLinkPortofolio] = useState("");
	const [portofoliotype, setPortofolioType] = useState("");
	const [imgPortofolio, setImgPortofolio] = useState(null);

	const [saveImage, setSaveImage] = useState(null);
	const [changeAvatar, setChangeAvatar] = useState(dataEmployee?.user_photo);
	const [fullName, setFullName] = useState("");
	const [jobTitle, setJobTitle] = useState("");
	const [jobDesc, setJobDesc] = useState("");
	const [address, setAddress] = useState("");
	const [companyAddress, setCompanyAddress] = useState("");
	const [descriptionBio, setDescriptionBio] = useState("");

	const userToken = localStorage.getItem("token");
	const idEmployee = useParams();
	const config = {
		headers: {
			Authorization: `Bearer ${userToken}`,
		},
	};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		getUserEmployee();
		getDetailEmployee();
		getExperienceEmployee();
		getSkillsEmployee();
	}, []);

	const getUserEmployee = () => {
		axios
			.get(`${process.env.REACT_APP_URL_API}/user/findByID?id=${idEmployee.id}`)
			.then((res) => {
				setDataEmployee(res?.data?.user[0]);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	};

	const getDetailEmployee = () => {
		axios
			.get(`${process.env.REACT_APP_URL_API}/getAllData/findByID?id=${idEmployee.id}`)
			.then((res) => {
				setDetailEmployee(res?.data?.allData[0]);
				setIsLoading(false);
			})
			.catch((err) => {
				// console.log(err);
			});
	};

	const getExperienceEmployee = () => {
		axios
			.get(`${process.env.REACT_APP_URL_API}/jobExperience/findByIdUser?id_user=${idEmployee.id}`)
			.then((res) => {
				setExperience(res?.data?.user[0]);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getSkillsEmployee = () => {
		axios
			.get(`${process.env.REACT_APP_URL_API}/skill/findByIdUser?id_user=${idEmployee.id}`)
			.then((res) => {
				setSkills(res?.data?.user);
			})
			.catch((err) => {
				// console.log(err);
			});
	};

	const handleAddSkills = (e) => {
		e.preventDefault();
		setIsLoading(true);

		const body = {
			id_user: idEmployee.id,
			skill: addSkill,
		};

		axios
			.post(`${process.env.REACT_APP_URL_API}/skill/add`, body, config)
			.then((res) => {
				Swal.fire({
					icon: "success",
					title: "Sukses",
					text: "Skill Berhasil ditambah",
				});
				getSkillsEmployee();
			})
			.catch((err) => {
				// setMsgError(err?.response?.data);
				setIsError(true);

				if (addSkill === "") {
					Swal.fire({
						icon: "error",
						text: `Skill tidak boleh kosong`,
					});
				} else {
					Swal.fire({
						icon: "error",
						text: `Skill sudah terdaftar`,
					});
				}
			})

			.finally(() => {
				setIsLoading(false);
				setTimeout(() => {
					setIsError(false);
				}, 1000);
			});
	};

	const handleAddExperience = (e) => {
		e.preventDefault();
		setIsLoading(true);

		const body = {
			id_user: idEmployee.id,
			job_title: position,
			company_name: companyName,
			start_date: startDate,
			end_date: endDate,
			description: descriptionExperience,
		};

		axios
			.post(`${process.env.REACT_APP_URL_API}/jobExperience/add`, body, config)
			.then((res) => {
				setIsError(true);
				Swal.fire({
					icon: "success",
					title: "Sukses",
					text: "Pengalaman Kerja Berhasil ditambah",
				});
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					text: "Semua form harus terisi",
				});
			})
			.finally(() => {
				setIsLoading(false);
				setTimeout(() => {
					setIsError(false);
				}, 1000);
			});
	};

	const handleAddPortofolio = (e) => {
		const formData = new FormData();
		formData.append("id_user", idEmployee.id);
		formData.append("aplication_title", namePortofolio);
		formData.append("link_repository", linkPortofolio);
		formData.append("portofolio_type", portofoliotype);
		formData.append("image", imgPortofolio);

		axios
			.post(`${process.env.REACT_APP_URL_API}/portofolio/add`, formData, config)
			.then((res) => {
				Swal.fire({
					icon: "success",
					title: "Sukses",
					text: "Portofolio Kerja Berhasil ditambah",
				});
				setShow(false);
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Gagal",
					text: "Semua form harus terisi",
				});
				setShow(true);
			});
	};

	const handleImage = (e) => {
		let image = e.target?.files[0];
		let previewImg = e.target?.files[0];
		// let nameImage = e.target?.files[0]?.name;
		setChangeAvatar(URL.createObjectURL(previewImg));
		setSaveImage(image);
	};

	const handleSaveProfile = async (e) => {
		setLoading(true);
		try {
			e.preventDefault();
			const body = {
				id: idEmployee.id,
				name: fullName,
				job_title: jobTitle,
				address: address,
				job_type: jobDesc,
				description: descriptionBio,
				workplace: companyAddress,
			};

			console.log(companyAddress);

			const formData = new FormData();
			formData.append("id", idEmployee.id);
			formData.append("profile", saveImage);

			const result = await Promise.allSettled([
				axios.patch(`${process.env.REACT_APP_URL_API}/user/editPhoto`, formData, config),
				axios.patch(`${process.env.REACT_APP_URL_API}/user/edit-detail`, body, config),
			]);

			// if (result[0]?.status === "rejected") {
			//   throw "Photo Profile harus bertipe .img, .jpg, .jpeg dan kapasitas maximum 1 MB";
			// } else
			if (result[1]?.status === "rejected") {
				throw "Update Profile Failed";
			} else {
				Swal.fire({
					icon: "success",
					text: "Edit Profile Successfully",
				});
				getUserEmployee();
			}
		} catch (error) {
			Swal.fire({
				icon: "error",
				text: error,
			});
			getUserEmployee();
		} finally {
			setLoading(false);
		}
	};

	console.log("skills ", skills);

	return (
		<>
			<div>
				<div className="profile-employee-bg">
					<Container>
						<div className="row">
							<div className="row mt-5">
								<div className="col-4">
									<div className="card">
										<div className="text-center">
											<img src={!changeAvatar ? dataEmployee?.user_photo : changeAvatar} className="card-img-top edit-profile-employee-img my-3" alt="..." />
											<h4 className="text-muted">
												<div className="image-upload">
													<label htmlFor="file-input" className="input-imgEmployee">
														<MdModeEditOutline /> <span>Change Avatar</span>
													</label>
													<input id="file-input" onChange={handleImage} type="file" hidden className="input-imgEmployee" />
												</div>
											</h4>
										</div>
										<div className="card-body mb-3">
											<h5 className="card-title">{dataEmployee?.name}</h5>
											<p>{detailEmployee?.job_title}</p>
											{detailEmployee?.address ? (
												<p className="card-text">
													<small className="text-muted">
														<GoLocation /> {detailEmployee?.address}
													</small>
												</p>
											) : null}

											<div className="mb-3">
												<small className="text-muted">{detailEmployee?.job_type}</small>
											</div>
										</div>
									</div>
									<div className="row button-edit-employee">
										<Button variant="flat text-bold" size="lg" className="mb-3" onClick={handleSaveProfile} disabled={loading}>
											{loading ? <Spinner animation="border" size="sm" /> : "Simpan"}
										</Button>
										<Button variant="outline-flat text-bold" href={`/profile-employee/${idEmployee?.id}`} size="lg">
											Batal
										</Button>
									</div>
								</div>
								<div className="col-8">
									{/* Data Diri */}
									<div className="card" style={{ width: "100%" }}>
										<div className="card-body">
											<h3>Data diri</h3>
											<hr />
											<form>
												<div className="mb-3">
													<label className="form-label form-text">Nama Lengkap</label>
													<input type="text" className="form-control form-control-lg" placeholder={`${dataEmployee?.name}`} onChange={(e) => setFullName(e.target.value)} />
												</div>
												<div className="mb-3">
													<label className="form-label form-text">Job Title</label>
													<input
														type="text"
														className="form-control form-control-lg"
														placeholder={`${detailEmployee?.job_title ? detailEmployee?.job_title : ""}`}
														onChange={(e) => setJobTitle(e.target.value)}
													/>
												</div>
												<div className="mb-3">
													<label className="form-label form-text">Job Desk</label>
													<input
														type="text"
														className="form-control form-control-lg"
														placeholder={`${detailEmployee?.job_type ? detailEmployee?.job_type : ""}`}
														onChange={(e) => setJobDesc(e.target.value)}
													/>
												</div>
												<div className="mb-3">
													<label className="form-label form-text">Domisili</label>
													<input
														type="text"
														className="form-control form-control-lg"
														placeholder={`${detailEmployee?.address ? detailEmployee?.address : ""}`}
														onChange={(e) => setAddress(e.target.value)}
													/>
												</div>
												<div className="mb-3">
													<label className="form-label form-text">Tempat kerja</label>
													<input
														type="text"
														className="form-control form-control-lg"
														placeholder={`${detailEmployee?.workplace ? detailEmployee?.workplace : ""}`}
														onChange={(e) => setCompanyAddress(e.target.value)}
													/>
												</div>
												<div className="mb-3">
													<label htmlFor="exampleInputPassword1" className="form-label form-text">
														Deskripsi singkat
													</label>
													<textarea
														className="form-control form-control-lg"
														placeholder={`${detailEmployee?.description ? detailEmployee?.description : ""}`}
														style={{ height: "144px" }}
														onChange={(e) => setDescriptionBio(e.target.value)}
													/>
												</div>
											</form>
										</div>
									</div>

									{/* Skills */}
									<div className="card" style={{ width: "100%" }}>
										<div className="card-body">
											<h3>Skills</h3>
											<hr />
											<form>
												<div className="mb-3">
													<div className="row">
														<div className="col-10">
															<input type="text" className="form-control form-control-lg" placeholder="Java" onChange={(e) => setAddSkill(e.target.value)} />
														</div>
														<div className="col-2 d-grid">
															{isLoading ? (
																<Button variant="warning-flat" size="lg" onClick={handleAddSkills} disabled={isLoading}>
																	<Spinner animation="border" size="sm" />
																</Button>
															) : (
																<Button variant="warning-flat text-bold" size="lg" onClick={handleAddSkills}>
																	Simpan
																</Button>
															)}
														</div>
														<SkillsUserEmployee dataSkills={skills} />
													</div>
												</div>
											</form>
										</div>
									</div>

									{/* Pengalaman Kerja */}
									<div className="card" style={{ width: "100%" }}>
										<div className="card-body">
											<h3>Pengalaman Kerja</h3>
											<hr />
											<form>
												<div className="mb-3">
													<label className="form-label form-text">Posisi</label>
													<input type="text" className="form-control form-control-lg" placeholder="web developer" onChange={(e) => setPosition(e.target.value)} />
												</div>
												<div className="mb-3">
													<div className="row">
														<div className="col-6">
															<label className="form-label form-text">Nama perusahaan</label>
															<input type="text" className="form-control form-control-lg" placeholder="PT Harus bisa" onChange={(e) => setCompanyName(e.target.value)} />
														</div>
														<div className="col-3">
															<label className="form-label form-text">Mulai</label>

															<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
														</div>
														<div className="col-3">
															<label className="form-label form-text">Selesai</label>

															<DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
														</div>
													</div>
												</div>
												<div className="mb-3">
													<label htmlFor="exampleInputPassword1" className="form-label form-text">
														Deskripsi singkat
													</label>
													<textarea
														className="form-control form-control-lg"
														placeholder="Deskripsikan pekerjaan anda"
														style={{ height: "144px" }}
														onChange={(e) => setDescriptionExperience(e.target.value)}
													/>
												</div>
												{isLoading ? (
													<Button variant="warning-flat" style={{ width: "100%" }} size="lg" className="mb-3" onClick={handleAddExperience} disabled={isLoading}>
														<Spinner animation="border" size="sm" />
													</Button>
												) : (
													<Button variant="warning-flat text-bold" style={{ width: "100%" }} size="lg" className="mb-3" onClick={handleAddExperience}>
														Simpan Pengalaman kerja
													</Button>
												)}
											</form>
											<hr />
											<Button variant="outline-warning-flat text-bold" style={{ width: "100%" }} size="lg" className="mb-3" onClick={handleShow}>
												Tambah Portofolio
											</Button>
											<Modal show={show} onHide={handleClose}>
												<Modal.Header closeButton>
													<Modal.Title>Add Portofolio</Modal.Title>
												</Modal.Header>
												<Modal.Body>
													<Form.Group controlId="formFileSm" className="mb-3">
														<Form.Label>Nama Aplikasi</Form.Label>
														<Form.Control className="mb-3" type="test" size="sm" onChange={(e) => setNamePortofolio(e.target.value)} />
														<Form.Label>Link Repositori</Form.Label>
														<Form.Control className="mb-3" type="test" size="sm" onChange={(e) => setLinkPortofolio(e.target.value)} />
														<Form.Label>Portofolio Type</Form.Label>
														<Form.Control className="mb-3" type="test" size="sm" onChange={(e) => setPortofolioType(e.target.value)} />
														<Form.Label>Upload Image Portofolio</Form.Label>
														<Form.Control className="mb-3" type="file" size="sm" onChange={(e) => setImgPortofolio(e.target?.files[0])} />
													</Form.Group>
												</Modal.Body>
												<Modal.Footer>
													<Button variant="warning-flat" onClick={handleClose}>
														Batal
													</Button>
													<Button variant="flat" onClick={handleAddPortofolio}>
														Simpan
													</Button>
												</Modal.Footer>
											</Modal>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</div>
				<div className="row" style={{ minHeight: "1470px" }}></div>
			</div>
		</>
	);
};

export default EditProfileEmployee;
