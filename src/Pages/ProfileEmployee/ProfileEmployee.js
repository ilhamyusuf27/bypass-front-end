import React, { useEffect, useState } from "react";
import { Button, Tab, Tabs, Container } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import "./ProfileEmployee.css";
import logoCompany from "../../Assets/Images/logo-company.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import PortofolioEmployee from "../../Components/PortofolioEmployee/PortofolioEmployee";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import NoDataComp from "../../Components/NoDataComp/NoDataComp";
import SocialMediaEmployee from "../../Components/SocialMediaEmployee/SocialMediaEmployee";
import { AiOutlineMail } from "react-icons/ai";
import SkillsUserEmployee from "../../Components/SkillsUserEmployee/SkillsUserEmployee";
import ExperienceEmployee from "../../Components/ExperienceEmployee/ExperienceEmployee";

const ProfileEmployee = () => {
	const [isLoading, setIsloading] = useState(true);
	const [dataEmployee, setDataEmployee] = useState([]);
	const [detailEmployee, setDetailEmployee] = useState([]);
	const [portofolioEmployee, setPortofolioEmployee] = useState([]);
	const [skills, setSkills] = useState([]);
	const [socials, setSocials] = useState([]);
	const [experience, setExperience] = useState([]);

	const idEmployee = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
		getUserEmployee();
		getDetailEmployee();
		getPortofolioEmployee();
		getSkillsEmployee();
		getSosmedEmployee();
		getExperienceEmployee();
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
				// console.log(err);
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
				// console.log(err);
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

	const getSosmedEmployee = () => {
		axios
			.get(`${process.env.REACT_APP_URL_API}/sosmed/findByIdUser?id_user=${idEmployee.id}`)
			.then((res) => {
				setSocials(res?.data?.user[0]);
			})
			.catch((err) => {
				// console.log(err);
			});
	};

	const getExperienceEmployee = () => {
		axios
			.get(`${process.env.REACT_APP_URL_API}/jobExperience/findByIdUser?id_user=${idEmployee.id}`)
			.then((res) => {
				setExperience(res?.data?.user);
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
												<p>{detailEmployee.job_title}</p>
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
													{skills?.length > 0 ? (
														<>
															<h5>Skills</h5>
															<SkillsUserEmployee dataSkills={skills} />
														</>
													) : null}
												</div>
												<div className="media-socials-employee mt-4">
													<div className="row">
														<small className="text-muted mt-2">
															<AiOutlineMail /> {dataEmployee?.email}
														</small>
													</div>
													<SocialMediaEmployee data={socials} />
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
														{experience?.length > 0 ? <ExperienceEmployee data={experience} /> : <NoDataComp title="Belum ada Experience" />}
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
