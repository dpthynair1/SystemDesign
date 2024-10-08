import React, { useState } from "react";

const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  //const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-300">
      <div
        className="font-bold p-2 text-blue-400 bg-blue-100 flex justify-between"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <span>{title}</span>{" "}
        <span className="text-blue-500 font-medium ">V</span>
      </div>

      {isOpen && <div className="p-2">{body}</div>}
    </div>
  );
};

export default AccordionItem;
