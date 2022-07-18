import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
  );
}

export default App;
