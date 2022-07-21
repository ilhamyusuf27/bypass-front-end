import React from "react";

import { Col, Row, Button, Container } from "react-bootstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "../../Pages/LandingPage/LandingPage.css";

import imageLp1 from "../../Assets/Images/imageLp1.png";
import imageLp2 from "../../Assets/Images/lp-2.png";

function LandingPage2() {
	return (
		<>
			<div className="my-4">
				<Row>
					<Col lg={6}>
						<img src={imageLp1} />
					</Col>
					<Col lg={6}>
						<h2>
							Kenapa harus mencari tallent
							<br />
							di peworld
						</h2>
						<div className="d-flex align-items-center my-4">
							<BsFillCheckCircleFill color="5E50A1" size="1.25rem" />
							<p style={{ margin: 0 }} className="ms-4">
								Lorem ipsum dolor sit amet.
							</p>
						</div>
						<div className="d-flex align-items-center my-4">
							<BsFillCheckCircleFill color="5E50A1" size="1.25rem" />
							<p style={{ margin: 0 }} className="ms-4">
								Lorem ipsum dolor sit amet.
							</p>
						</div>
						<div className="d-flex align-items-center my-4">
							<BsFillCheckCircleFill color="5E50A1" size="1.25rem" />
							<p style={{ margin: 0 }} className="ms-4">
								Lorem ipsum dolor sit amet.
							</p>
						</div>
						<div className="d-flex align-items-center my-4">
							<BsFillCheckCircleFill color="5E50A1" size="1.25rem" />
							<p style={{ margin: 0 }} className="ms-4">
								Lorem ipsum dolor sit amet.
							</p>
						</div>
					</Col>
				</Row>
			</div>

			<div>
				<Row>
					<Col lg={6} className="d-flex align-items-center">
						<div>
							<h2>Skill Tallent</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
							<Row>
								<Col lg={6}>
									<div className="d-flex align-items-center my-4">
										<BsFillCheckCircleFill color="FBB017" size="1.25rem" />
										<p className="ms-4 mb-0">Java</p>
									</div>
									<div className="d-flex align-items-center my-4">
										<BsFillCheckCircleFill color="FBB017" size="1.25rem" />
										<p className="ms-4 mb-0">Kotlin</p>
									</div>
									<div className="d-flex align-items-center my-4">
										<BsFillCheckCircleFill color="FBB017" size="1.25rem" />
										<p className="ms-4 mb-0">PHP</p>
									</div>
									<div className="d-flex align-items-center my-4">
										<BsFillCheckCircleFill color="FBB017" size="1.25rem" />
										<p className="ms-4 mb-0">JavaScript</p>
									</div>
								</Col>
								<Col lg={6}>
									<div className="d-flex align-items-center my-4">
										<BsFillCheckCircleFill color="FBB017" size="1.25rem" />
										<p className="ms-4 mb-0">Golang</p>
									</div>
									<div className="d-flex align-items-center my-4">
										<BsFillCheckCircleFill color="FBB017" size="1.25rem" />
										<p className="ms-4 mb-0">C++</p>
									</div>
									<div className="d-flex align-items-center my-4">
										<BsFillCheckCircleFill color="FBB017" size="1.25rem" />
										<p className="ms-4 mb-0">Ruby</p>
									</div>
									<div className="d-flex align-items-center my-4">
										<BsFillCheckCircleFill color="FBB017" size="1.25rem" />
										<p className="ms-4 mb-0">10+ Bahasa lainnya</p>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
					<Col lg={6} className="d-flex justify-content-end">
						<img src={imageLp2} />
					</Col>
				</Row>
			</div>
		</>
	);
}

export default LandingPage2;
