import React from "react";

const MultipleAccordianItem = ({ title, body, isOpen, setIsOpen }) => {
  console.log(isOpen);
  return (
    <div className="border border-slate-300">
      <div
        className="font-bold p-2 text-blue-400 bg-blue-100 flex justify-between"
        onClick={setIsOpen}
      >
        <span>{title}</span>{" "}
        <span className="text-blue-500 font-medium ">V</span>
      </div>
      {isOpen && <div>{body}</div>}
    </div>
  );
};

export default MultipleAccordianItem;
