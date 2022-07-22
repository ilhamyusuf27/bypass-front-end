import React from "react";
import { Link } from "react-router-dom";

const PaginationEmployees = ({ dataPerPage, totalData, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul className="pagination justify-content-center my-5">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <Link to="/home" className="pagination-employee">
                <a className="page-link" onClick={() => paginate(number)}>
                  {number}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default PaginationEmployees;
