import React from "react";

const ChatWindow = ({ displayName, photo, message }) => {
  return (
    <div className="flex  items-centre gap-3 p-2">
      <img
        className="rounded-full w-8 h-8 m-1"
        src={photo}
        alt=""
      />
      <p className="flex-1 ">
        <span className="mr-2  font-semibold">{displayName}</span>
        <span className=" break-words ">{message}</span>
      </p>
    </div>
  );
};

export default ChatWindow;
