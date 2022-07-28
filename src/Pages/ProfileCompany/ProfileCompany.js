import { useEffect, useState, React } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProfileCompany.css";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import CryptoJS from "crypto-js";

const ProfilCompany = () => {
	// encrypt localStorage
	const localData = localStorage.getItem("data");
	const originalLocalData = localData ? JSON.parse(CryptoJS.AES.decrypt(localData, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)) : null;

	const data = originalLocalData;
	const rec_id = data.recruiter_id;

	const [isLoading, setIsloading] = useState(true);
	const [dataCompany, setDataCompany] = useState([]);

	useEffect(() => {
		window.scrollTo(0, 0);
		getCompany();
	}, []);

	const getCompany = () => {
		axios
			.get(`${process.env.REACT_APP_URL_API}/company/find/id?recruiter_id=${rec_id}`)
			.then((res) => {
				setDataCompany(res?.data?.company[0]);
				setIsloading(false);
			})
			.catch((err) => console.log(err));
	};

	// const company_name = ;
	return (
		<>
			{isLoading ? (
				<>
					<LoadingPage />
					<div className="mb-5 mt-5" />
				</>
			) : (
				<Container className="mb-5">
					<Row>
						<div className="col-lg-12 col-sm-12">
							<div className="card hovercard mt-5">
								<div className="cardheader"></div>
								<div className="avatar-p-company">
									<img
										src={
											dataCompany?.recruiter_photo ??
											"https://us.123rf.com/450wm/solarus/solarus2112/solarus211200026/178493166-default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available-.jpg"
										}
										alt=""
									/>
								</div>
								<div className="info">
									<div className="title">
										<h2>{dataCompany?.company_name}</h2>
										<small>{dataCompany?.business_fields ?? "-"}</small>
									</div>
									<div className="desc">{dataCompany?.company_city ?? "-"}</div>
								</div>

								<Container>
									<Row>
										<Col md={{ span: 6, offset: 3 }}>
											<div className="desc pb-4">
												<small>{dataCompany?.company_description ?? "-"}</small>
											</div>
											<Link exact to="/edit-profile-company">
												<Button variant="primary" size="lg" className="button-edit">
													Edit Profile
												</Button>
											</Link>
										</Col>
									</Row>

									<div className="row pt-5 pb-5 social">
										<Col md={{ span: 6, offset: 3 }}>
											<table>
												<tr>
													<td>
														{" "}
														<h3>
															<FaRegEnvelope />
														</h3>{" "}
													</td>
													<td className="px-3">{dataCompany?.recruiter_email ?? "-"}</td>
												</tr>
												<tr>
													<td>
														{" "}
														<h3>
															<FaInstagram />
														</h3>{" "}
													</td>
													<td className="px-3">{dataCompany?.company_instagram ?? "-"}</td>
												</tr>
												<tr>
													<td>
														{" "}
														<h3>
															<BsTelephone />
														</h3>{" "}
													</td>
													<td className="px-3">{dataCompany?.recruiter_phone ?? "-"}</td>
												</tr>
												<tr>
													<td>
														{" "}
														<h3>
															<FiLinkedin />
														</h3>{" "}
													</td>
													<td className="px-3">{dataCompany?.company_linkedin ?? "-"}</td>
												</tr>
											</table>
										</Col>
									</div>
								</Container>
							</div>
						</div>
					</Row>
				</Container>
			)}
		</>
	);
};

export default ProfilCompany;
