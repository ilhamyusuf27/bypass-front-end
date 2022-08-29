import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import EmployeesList from "../../Components/EmployeesList/EmployeesList";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import PaginationEmployees from "../../Components/PaginationEmployees/PaginationEmployees";
import { useNavigate } from "react-router";
import CryptoJS from "crypto-js";

const Home = () => {
	const navigate = useNavigate();
	const [employeesList, setEmployeesList] = useState([]);
	const [isLoading, setIsloading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [dataPerPage] = useState(4);
	const [currentPageSearch] = useState(1);
	const [dataPerPageSearch] = useState(4);
	const [search, setSearch] = useState("");
	const [resultSearch, setResultSearch] = useState([]);
	const [isClicked, setIsClicked] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	const [isError, setIsError] = useState(false);
	const [value, setValue] = useState("name");

	// encrypt localStorage
	const localData = localStorage.getItem("data");
	const originalLocalData = localData ? JSON.parse(CryptoJS.AES.decrypt(localData, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)) : null;

	useEffect(() => {
		getDataEmployees();
	}, []);

	useEffect(() => {
		if (originalLocalData.role === "user" || !localStorage.getItem("token")) {
			navigate("/");
		}
	});

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
			if (value === "job") {
				setIsClicked(true);
				setIsloading(true);
				axios
					.get(`${process.env.REACT_APP_URL_API}/getAllProfile/findByJobtitle?job_title=${search}`)
					.then((res) => {
						setIsloading(false);
						setIsError(false);
						setResultSearch(res?.data?.profile);
					})
					.catch((err) => {
						setIsloading(false);
						setIsError(true);
						setErrMsg(err?.response?.data);
					});
			} else if (value === "name") {
				setIsClicked(true);
				setIsloading(true);
				axios
					.get(`${process.env.REACT_APP_URL_API}/getAllProfile/findByName?name=${search}`)
					.then((res) => {
						setIsloading(false);
						setIsError(false);
						setResultSearch(res?.data?.profile);
					})
					.catch((err) => {
						setIsloading(false);
						setIsError(true);
						setErrMsg(err?.response?.data);
					});
			}
		}
	};

	const indextOfLastDataSearch = currentPageSearch * dataPerPageSearch;
	const indextOfFirstDataSearch = indextOfLastDataSearch - dataPerPageSearch;
	const currentDataSearch = resultSearch.slice(indextOfFirstDataSearch, indextOfLastDataSearch);

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
							<Form.Control aria-label="Text input with dropdown button" className="text-bold w-75" size="lg" value={search} onChange={(e) => setSearch(e.target.value)} />
							<Form.Select onChange={(e) => setValue(e?.target?.value)}>
								<option value="name">Nama</option>
								<option value="job">Job</option>
							</Form.Select>
							{/* <DropdownButton variant="light" title="Kategori" id="input-group-dropdown-2" align="end">
								<Dropdown.Item>Sortir Berdasarkan Nama</Dropdown.Item>
								<Dropdown.Item>Sortir Berdasarkan Skill</Dropdown.Item>
								<Dropdown.Item>Sortir Berdasarkan Lokasi</Dropdown.Item>
								<Dropdown.Item>Sortir Berdasarkan Freelance</Dropdown.Item>
								<Dropdown.Item>Sortir Berdasarkan Fulltime</Dropdown.Item>
							</DropdownButton> */}
							<Button variant="flat text-bold" type="submit">
								Search
							</Button>
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
								<PaginationEmployees dataPerPage={dataPerPageSearch} totalData={resultSearch?.length} paginate={paginate} />
							</>
						)
					) : (
						<>
							<EmployeesList employeesList={currentData} />
							<PaginationEmployees dataPerPage={dataPerPage} totalData={employeesList?.length} paginate={paginate} />
						</>
					)}
				</Container>
			</div>
		</>
	);
};

export default Home;
