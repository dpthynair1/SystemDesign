import React from "react";

const Shimmer = () => {
  return (
    <>
      {Array(20)
        .fill(0)
        .map((n, i) => (
          <div
            key={i}
            className=" transition-colors  bg-slate-400  p-2 m-2  rounded-lg w-64 h-64 border border-gray-500 "
          >
            <div className=" transition-colors bg-slate-300 border border-gray-200">
              <p></p>
            </div>
          </div>
        ))}
    </>
  );
};
export default Shimmer;
