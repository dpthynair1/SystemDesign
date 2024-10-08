import data from "../Utils/AccordionData";
import AccordionItem from "./AccordionItem";

import React, { useState } from "react";

const Accordion = () => {
  //   const { title, body } = data[0];

  const [openIndex, setOpenIndex] = useState(0);
  console.log(openIndex);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <AccordionItem
            key={index}
            title={item.title}
            body={item.body}
            isOpen={index === openIndex}
            setIsOpen={() => {
              index === openIndex ? setOpenIndex(null) : setOpenIndex(index);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
