import React from "react";

const ProductCard = ({ id, title, price, thumbnail, description }) => {
  return (
    <div className="border border-solid border-b-slate-500 p-4 m-4">
      <div>
        <img
          className="object-fill h-48 w-72"
          src={thumbnail}
          alt={title}
        />
      </div>
      <h1 className="text-xl p-2 w-72">{title}</h1>
      <h2 className="p-2 w-72">Rs {price}</h2>
      <p className="w-72 text-sm p-2">{description}</p>
    </div>
  );
};

export default ProductCard;
