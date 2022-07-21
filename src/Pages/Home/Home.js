import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import EmployeesList from "../../Components/EmployeesList/EmployeesList";

const Home = () => {
  const [employeesList, setEmployeesList] = useState([]);

  useEffect(() => {
    getDataEmployees();
  }, []);

  const getDataEmployees = () => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/user`)
      .then((res) => {
        setEmployeesList(res?.data?.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="header-home">
        <Container>
          <h3 className="py-3">Top Jobs</h3>
        </Container>
      </div>
      <div className="mt-3">
        <Container>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Text input with dropdown button"
              size="lg"
            />
            <DropdownButton
              variant="light"
              title="Kategori"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">Sortir Berdasarkan Nama</Dropdown.Item>
              <Dropdown.Item href="#">Sortir Berdasarkan Skill</Dropdown.Item>
              <Dropdown.Item href="#">Sortir Berdasarkan Lokasi</Dropdown.Item>
              <Dropdown.Item href="#">
                Sortir Berdasarkan Freelance
              </Dropdown.Item>
              <Dropdown.Item href="#">
                Sortir Berdasarkan Fulltime
              </Dropdown.Item>
            </DropdownButton>
            <Button variant="flat">Search</Button>
          </InputGroup>
          <EmployeesList employeesList={employeesList} />
        </Container>
      </div>
    </>
  );
};

export default Home;
