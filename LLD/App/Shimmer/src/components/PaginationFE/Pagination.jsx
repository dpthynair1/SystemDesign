import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const noOfPages = Math.ceil(totalPosts / postsPerPage);
  console.log("currentPage", currentPage);
  return (
    <div className="text-center m-4">
      {currentPage > 1 && (
        <span
          className="cursor-pointer font-semibold text-xl"
          onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
        >
          Prev
        </span>
      )}
      {[...Array(noOfPages).keys()].map((pn) => (
        <span
          onClick={() => paginate(pn)}
          key={pn}
          className={
            "p-4 text-xl cursor-pointer" +
            (pn === currentPage - 1
              ? "font-bold underline text-sky-400/100"
              : "")
          }
        >
          {pn + 1}
        </span>
      ))}
      {currentPage < noOfPages && (
        <span
          className="cursor-pointer font-semibold text-xl"
          onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
        >
          Next
        </span>
      )}
    </div>
  );
};

export default Pagination;
