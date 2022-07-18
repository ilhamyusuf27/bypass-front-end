import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import WithoutNavFooter from "./Components/NavFooterWrapper/WithoutNavFooter";
import WithNavFooter from "./Components/NavFooterWrapper/WithNavFooter";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* page with no navbar and footer */}
        <Route element={<WithoutNavFooter />}>
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* page with navbar and footer */}
        <Route element={<WithNavFooter />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
>>>>>>> login
  );
}

export default App;
