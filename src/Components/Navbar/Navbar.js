import React, { useState } from "react";
import { Container, Navbar, Nav, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../../Assets/Images/brand.png";
import userNavIcon from "../../Assets/Images/userNav.png";
import mailIcon from "../../Assets/Images/mail.png";
import bellIcon from "../../Assets/Images/bell.png";

import { connect } from "react-redux";
import CryptoJS from "crypto-js";

const Navibar = (props) => {
	// encrypt redux
	const data = props?.dataCompany?.profile;
	const originalData = data ? JSON.parse(CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)) : null;

	// encrypt localStorage
	const localData = localStorage.getItem("data");
	const originalLocalData = localData ? JSON.parse(CryptoJS.AES.decrypt(localData, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)) : null;

	const navigate = useNavigate();
	const [isLogin, setIslogin] = useState(true);
	const [user, setUser] = useState(null);

	React.useEffect(() => {
		if (localStorage.getItem("token")) {
			setIslogin(false);
		}
	}, []);

	React.useEffect(() => {
		if (localStorage.getItem("token")) {
			setIslogin(false);
		}
	});

	const handleRegPekerja = () => {
		navigate("/register");
	};

	const handleRegCompany = () => {
		navigate("/register-company");
	};

	const handleLogOut = () => {
		localStorage.clear();
		window.location.href = "/";
	};

	const handleProfile = () => {
		if (originalData?.role === "recruiter") {
			navigate("/profile-company");
		} else if (originalLocalData?.role === "user") {
			navigate(`/profile-employee/${originalLocalData?.id}`);
		}
	};

	const handleImage = () => {
		if (originalData?.role === "recruiter") {
			return (
				props.dataCompany.recruiter_photo ??
				"https://us.123rf.com/450wm/solarus/solarus2112/solarus211200026/178493166-default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available-.jpg"
			);
		} else if (originalLocalData?.role === "user") {
			return originalLocalData.user_photo;
		} else {
			return userNavIcon;
		}
	};

	const handleMsg = () => {
		navigate("/chat-isi");
	};

	return (
		<>
			<div className="row">
				<Navbar collapseOnSelect expand="lg" bg="white" variant="light">
					<Container>
						<Navbar.Brand href="/">
							<img src={brandLogo} alt="" />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto"></Nav>
							<Nav>
								{isLogin ? (
									<>
										<Link to="/option-login">
											<Button variant="outline-flat" style={{ marginRight: "5px" }} size="md">
												Masuk
											</Button>
										</Link>

										<DropdownButton variant="flat" title="Daftar" id="bg-nested-dropdown">
											<Dropdown.Item onClick={handleRegPekerja}>Pekerja</Dropdown.Item>
											<Dropdown.Item onClick={handleRegCompany}>Perekrut</Dropdown.Item>
										</DropdownButton>
									</>
								) : (
									<>
										<Nav.Link onClick={handleMsg}>
											<img src={mailIcon} alt="" />
										</Nav.Link>
										<Nav.Link href="#deets">
											<img src={bellIcon} alt="" />
										</Nav.Link>
										<DropdownButton
											variant="none"
											title={<img src={handleImage()} alt="" style={{ width: "30px", height: "30px", borderRadius: "50%" }} />}
											id="bg-nested-dropdown"
											style={{ boxShadow: "none", outline: "none" }}
										>
											<Dropdown.Item onClick={handleProfile}>Profile</Dropdown.Item>
											<Dropdown.Divider />
											<Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
										</DropdownButton>
									</>
								)}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	dataCompany: state?.loginCompany,
});

const mapDispatchToProp = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProp)(Navibar);
