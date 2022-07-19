import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import ProfileCompany from "./Pages/ProfileCompany/ProfileCompany";
import WithoutNavFooter from "./Components/NavFooterWrapper/WithoutNavFooter";
import WithNavFooter from "./Components/NavFooterWrapper/WithNavFooter";
import NotFound from "./Pages/NotFound/NotFound";
import ProfileEmployee from "./Pages/ProfileEmployee/ProfileEmployee";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* page with no navbar and footer */}
				<Route element={<WithoutNavFooter />}>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Login />} />
					<Route path="*" element={<NotFound />} />
					<Route path="login" element={<Login />} />
				</Route>

				{/* page with navbar and footer */}
				<Route element={<WithNavFooter />}>
					<Route path="/profile-company" element={<ProfileCompany />} />
					<Route path="/home" element={<Home />} />
					<Route path="/profile-employee" element={<ProfileEmployee />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
