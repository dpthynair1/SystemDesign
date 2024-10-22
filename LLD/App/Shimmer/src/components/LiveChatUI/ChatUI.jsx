import React from "react";
import { v4 as uuidv4 } from "uuid";

const ChatUI = ({ chats }) => {
  return (
    <div
      className="w-[38rem]
      h-[600px] border border-solid-gray border-gray-400 m-5  overflow-y-auto flex-col-reverse"
    >
      {chats.map((chat) => (
        <div
          className="flex  items-centre gap-3 p-2"
          key={`${chat.id}-${chat.timestamp}`}
        >
          <img
            className="rounded-full w-8 h-8 m-1"
            src={chat.authorDetails.profileImageUrl}
            alt=""
          />
          <p className="flex-1 ">
            <span className="mr-2  font-semibold">
              {chat.authorDetails.displayName}
            </span>
            <span className=" break-words ">{chat.snippet.displayMessage}</span>
          </p>
        </div>
      ))}
      <input type="text" />
    </div>
  );
};

export default ChatUI;
