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
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import PaginationEmployees from "../../Components/PaginationEmployees/PaginationEmployees";

const Home = () => {
  const [employeesList, setEmployeesList] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(4);
  const [currentPageSearch, setCurrentPageSearch] = useState(1);
  const [dataPerPageSearch] = useState(4);
  const [nameSearch, setNameSearch] = useState(null);
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getDataEmployees();
  }, []);

  const getDataEmployees = () => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/getAllProfile`)
      .then((res) => {
        setEmployeesList(res?.data?.profile);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  };

  const indextOfLastData = currentPage * dataPerPage;
  const indextOfFirstData = indextOfLastData - dataPerPage;
  const currentData = employeesList.slice(indextOfFirstData, indextOfLastData);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) {
      setIsloading(false);
      setIsClicked(false);
    } else {
      setIsClicked(true);
      setIsloading(true);
      axios
        .get(
          `${process.env.REACT_APP_URL_API}/getAllProfile/findByJobtitle?job_title=${search}`
        )
        .then((res) => {
          setIsloading(false);
          setIsError(false);
          setResultSearch(res?.data?.profile);
        })
        .catch((err) => {
          setIsloading(false);
          setIsError(true);
          setErrMsg(err?.response?.data);
          // console.log(err?.response?.data);
        });
    }
  };

  const indextOfLastDataSearch = currentPageSearch * dataPerPageSearch;
  const indextOfFirstDataSearch = indextOfLastDataSearch - dataPerPageSearch;
  const currentDataSearch = resultSearch.slice(
    indextOfFirstDataSearch,
    indextOfLastDataSearch
  );

  return (
    <>
      <div className="header-home">
        <Container>
          <h3 className="py-3">Top Jobs</h3>
        </Container>
      </div>
      <div className="mt-3">
        <Container>
          <Form onSubmit={handleSearch}>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Text input with dropdown button"
                size="lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <DropdownButton
                variant="light"
                title="Kategori"
                id="input-group-dropdown-2"
                align="end"
                disabled
              >
                <Dropdown.Item href="#">Sortir Berdasarkan Nama</Dropdown.Item>
                <Dropdown.Item href="#">Sortir Berdasarkan Skill</Dropdown.Item>
                <Dropdown.Item href="#">
                  Sortir Berdasarkan Lokasi
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  Sortir Berdasarkan Freelance
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  Sortir Berdasarkan Fulltime
                </Dropdown.Item>
              </DropdownButton>
              <Button variant="flat">Search</Button>
            </InputGroup>
          </Form>
          {isLoading ? (
            <LoadingPage />
          ) : isClicked ? (
            isError ? (
              <h3 className="text-center my-5 py-5">{errMsg}</h3>
            ) : (
              <>
                <EmployeesList employeesList={currentDataSearch} />
                <PaginationEmployees
                  dataPerPage={dataPerPageSearch}
                  totalData={resultSearch?.length}
                  paginate={paginate}
                />
              </>
            )
          ) : (
            <>
              <EmployeesList employeesList={currentData} />
              <PaginationEmployees
                dataPerPage={dataPerPage}
                totalData={employeesList?.length}
                paginate={paginate}
              />
            </>
          )}
        </Container>
      </div>
    </>
  );
};

export default Home;
