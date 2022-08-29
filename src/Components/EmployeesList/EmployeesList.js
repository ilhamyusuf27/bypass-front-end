import React from "react";
import { Badge, Button } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const EmployeesList = (props) => {
	const renderEmployeesList = () => {
		let jsx = props?.employeesList?.map((item) => {
			return (
				<>
					<div className="row mx-4">
						<div className="col-md-5">
							<div className="row g-0">
								<div className="col-md-4 align-self-center">
									<div>
										<img src={item.user_photo} className="img-fluid rounded-start img-user-home" alt="..." />
									</div>
								</div>
								<div className="col-md-8">
									<div className="card-body body-user-home">
										<h5 className="card-title">{item.name}</h5>
										<p className="card-text">{item.job_title}</p>
										<p className="card-text">
											<small className="text-muted">
												{item.address ? (
													<>
														<GoLocation /> {item.address}
													</>
												) : null}
											</small>
										</p>
										{item?.skill?.map((val) => {
											return (
												<span className="skills-badge-home">
													<Badge className="badge-skills" bg="warning">
														{val.skill}
													</Badge>
												</span>
											);
										})}
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-7 d-flex justify-content-end align-items-center">
							<div className="col-md-2 ">
								<Link to={`/profile-employee/${item.id}`}>
									<Button variant="flat text-bold">Lihat Profile</Button>
								</Link>
							</div>
						</div>
					</div>
					<hr className="hr-home" />
				</>
			);
		});
		return jsx;
	};

	return (
		<>
			<div className="card mb-3 py-3" style={{ maxWidth: "100%", border: "none" }}>
				{renderEmployeesList()}
			</div>
		</>
	);
};

export default EmployeesList;
