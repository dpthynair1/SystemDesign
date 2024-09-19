import data from "../Utils/AccordianData";
import AccordianItem from "./AccordianItem";

import React, { useState } from "react";

const Accordian = () => {
  //   const { title, body } = data[0];

  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <AccordianItem
            key={index}
            title={item.title}
            body={item.body}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordian;
