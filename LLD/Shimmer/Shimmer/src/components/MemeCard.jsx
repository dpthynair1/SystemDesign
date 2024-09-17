import React from "react";

export const MemeCard = ({ data }) => {
  const { url, title, author } = data;
  return (
    <div className=" p-2 m-2 border border-gray-500 rounded-lg ">
      <img
        className="w-[200px] h-[200px] border border-gray-500"
        src={url}
        alt="meme"
      />
      <p>{author}</p>
    </div>
  );
};
