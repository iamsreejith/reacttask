import React from "react";

const Pagination = ({ paginate }) => {
  const pageNumbers = [1, 2, 3, 4];

  return (
    <div className="">
      <nav>
        <ul className="pagination ">
          {pageNumbers.map(number => (
            <li key={number} className="page-item ">
              <button
                onClick={() => paginate(number)}
                href="#"
                className="page-link"
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
