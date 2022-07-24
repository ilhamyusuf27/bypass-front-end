import React, { useEffect, useState } from "react";
import { Button, Badge, Tab, Tabs, Container } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FiGitlab } from "react-icons/fi";
import "./ProfileEmployee.css";
import logoCompany from "../../Assets/Images/logo-company.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import PortofolioEmployee from "../../Components/PortofolioEmployee/PortofolioEmployee";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import NoDataComp from "../../Components/NoDataComp/NoDataComp";

const ProfileEmployee = () => {
	const [dataEmployee, setDataEmployee] = useState([]);
	const [detailEmployee, setDetailEmployee] = useState([]);
	const [portofolioEmployee, setPortofolioEmployee] = useState([]);
	const [isLoading, setIsloading] = useState(true);

	const idEmployee = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
		getUserEmployee();
		getDetailEmployee();
		getPortofolioEmployee();
	}, []);

	const getUserEmployee = () => {
		axios
			.get(`${process.env.REACT_APP_URL_API}/user/findByID?id=${idEmployee.id}`)
			.then((res) => {
				setDataEmployee(res?.data?.user[0]);
				setIsloading(false);
			})
			.catch((err) => console.log(err));
	};

	const getDetailEmployee = () => {
		axios
			.get(`${process.env.REACT_APP_URL_API}/getAllData/findByID?id=${idEmployee.id}`)
			.then((res) => {
				setDetailEmployee(res?.data?.allData[0]);
				setIsloading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getPortofolioEmployee = () => {
		axios
			.get(`${process.env.REACT_APP_URL_API}/portofolio/findByIdUser?id_user=${idEmployee.id}`)
			.then((res) => {
				setPortofolioEmployee(res?.data?.user);
				setIsloading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			{isLoading ? (
				<LoadingPage />
			) : (
				<div className="profile-employee-bg">
					<Container>
						<div className="row">
							<div>
								<div className="row mt-5">
									<div className="col-4">
										<div className="card">
											<div className="text-center pt-4">
												<img src={dataEmployee?.user_photo} className="card-img-top profile-employee-img" alt="..." />
											</div>
											<div className="card-body mb-3">
												<h5 className="card-title">{dataEmployee?.name}</h5>
												<p>{dataEmployee?.job_title}</p>
												<p className="card-text">
													<small className="text-muted">
														<GoLocation /> {detailEmployee?.address}
													</small>
												</p>
												<small className="text-muted">{dataEmployee?.job_type}</small>
												<p className="card-text">
													<small className="text-muted">{detailEmployee?.description}</small>
												</p>
												{dataEmployee?.is_hired ? (
													<Button variant="flat" style={{ width: "100%" }} size="lg" disabled>
														Already Hired
													</Button>
												) : (
													<Button variant="flat" style={{ width: "100%" }} size="lg">
														Hire
													</Button>
												)}

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
												<div className="media-socials-employee mt-4">
													<div className="row">
														<small className="text-muted mt-2">
															<AiOutlineMail /> {dataEmployee?.email}
														</small>
													</div>
													<div className="row">
														<small className="text-muted mt-2">
															<FiInstagram /> @testIG
														</small>
													</div>
													<div className="row">
														<small className="text-muted mt-2">
															<AiFillGithub /> @testgit
														</small>
													</div>
													<div className="row">
														<small className="text-muted mt-2">
															<FiGitlab /> @testlab
														</small>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-8">
										<div className="card" style={{ width: "100%" }}>
											<div className="card-body">
												<Tabs defaultActiveKey="portofolio" id="uncontrolled-tab-example" className="mb-3">
													<Tab eventKey="portofolio" title="Portofolio">
														{portofolioEmployee?.length > 0 ? <PortofolioEmployee data={portofolioEmployee} /> : <NoDataComp title="Belum ada Portofolio" />}
													</Tab>
													<Tab eventKey="pengalaman-kerja" title="Pengalaman Kerja">
														<div className="row">
															<div className="col-2">
																<img src={logoCompany} alt="" className="img-experience-portofolio" />
															</div>
															<div className="col-9">
																<h2>Engineer</h2>
																<h4 className="text-muted">Tokopedia</h4>
																<p className="text-muted">July 2019 - January 2020 6 Monts</p>
																<p>
																	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum
																	risus at.
																</p>
																<hr />
															</div>
														</div>
														<div className="row">
															<div className="col-2">
																<img src={logoCompany} alt="" className="img-experience-portofolio" />
															</div>
															<div className="col-9">
																<h2>Engineer</h2>
																<h4 className="text-muted">Tokopedia</h4>
																<p className="text-muted">July 2019 - January 2020 6 Monts</p>
																<p>
																	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum
																	risus at.
																</p>
															</div>
														</div>
													</Tab>
												</Tabs>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</div>
			)}

			<div className="row" style={{ minHeight: "120vh" }}></div>
		</>
	);
};

export default ProfileEmployee;
