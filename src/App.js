import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import ProfileCompany from "./Pages/ProfileCompany/ProfileCompany";
import EditProfileCompany from "./Pages/EditProfileCompany/EditProfileCompany";
import WithoutNavFooter from "./Components/NavFooterWrapper/WithoutNavFooter";
import WithNavFooter from "./Components/NavFooterWrapper/WithNavFooter";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* page with no navbar and footer */}
				<Route element={<WithoutNavFooter />}>
					<Route path="login" element={<Login />} />
					<Route path="*" element={<NotFound />} />
				</Route>

				{/* page with navbar and footer */}
				<Route element={<WithNavFooter />}>
					<Route path="/profile-company" element={<ProfileCompany />} />
					<Route path="/edit-profile-company" element={<EditProfileCompany />} />
					<Route path="/home" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
