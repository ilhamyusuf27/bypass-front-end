import React from "react";

import { Container } from "react-bootstrap";

import LandingPage2 from "../../Components/LandingPage2/LandingPage2";
import LandingPage3 from "../../Components/LandingPage3/LandingPage3";

function LandingPage() {
	return (
		<>
			<Container>
				<LandingPage2 />
				<LandingPage3 />
			</Container>
		</>
	);
}

export default LandingPage;
