import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [noOfPages, setNoOfPages] = useState(0);
  const [products, setProducts] = useState([]);
  const LIMIT = 10;

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=id,title,price,thumbnail,description`
    );
    const json = await data.json();
    console.log(json);
    setProducts(json.products);
    setNoOfPages(Math.ceil(json.total / LIMIT));
    console.log(json.total);
    console.log("noOfPages", noOfPages);
  };
  return (
    <div className="">
      <div className="flex flex-wrap  justify-center items-cente">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              key={product.id}
              {...product}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center ">
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
            className="cursor-pointer"
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((pn) => (
          <span
            onClick={() => setCurrentPage(pn)}
            key={pn}
            className={
              "p-2 cursor-pointer " +
              (pn === currentPage && "font-bold underline")
            }
          >
            {pn}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
            className="cursor-pointer"
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
