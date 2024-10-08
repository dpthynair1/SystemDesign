import React from "react";
import { Lang } from "./langConstant";

export const About = ({ lang }) => {
  const data = Lang[lang];
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p>{data.desc}</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">{data.title2}</h1>
        <p>{data.desc}</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">{data.title3}</h1>
        <p>{data.desc}</p>
      </div>
    </>
  );
};
