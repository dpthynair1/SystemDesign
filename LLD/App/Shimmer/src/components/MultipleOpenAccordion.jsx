import data from "../Utils/AccordionData";
import React, { useState } from "react";
import MultipleAccordionItem from "./MultipleAccordionItem";

const MultipleOpenAccordion = () => {
  const [openIndex, setOpenIndex] = useState([]);
  console.log("openIndex ", openIndex);
  const handleToggle = (index) => {
    console.log("Index", index);

    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i != index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <MultipleAccordionItem
            key={index}
            isOpen={openIndex.includes(index)}
            title={item.title}
            body={item.body}
            setIsOpen={() => {
              handleToggle(index);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MultipleOpenAccordion;
