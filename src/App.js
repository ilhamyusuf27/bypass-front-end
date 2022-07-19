import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Pages/Register/Register";
import CompanyRegis from "./Pages/Register/CompanyRegis";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="register" element={<Register />} />
          <Route path="company-register" element={<CompanyRegis />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
