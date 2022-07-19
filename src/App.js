import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import WithoutNavFooter from "./Components/NavFooterWrapper/WithoutNavFooter";
import WithNavFooter from "./Components/NavFooterWrapper/WithNavFooter";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* page with no navbar and footer */}
				<Route element={<WithoutNavFooter />}>
					<Route path="*" element={<NotFound />} />
					<Route path="login" element={<Login />} />
				</Route>

				{/* page with navbar and footer */}
				<Route element={<WithNavFooter />}>
					<Route path="/home" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
