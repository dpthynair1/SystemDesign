import React, { useEffect, useState } from "react";
import VideoStream from "./VideoStream";
import ChatUI2 from "./ChatUI2";

const LiveChatUi = () => {
  const [chats, setChats] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const CHAT_MESSAGE_LIMIT = 17;

  // const fetchChat = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=Cg0KC2pmS2ZQZnlKUmRrKicKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxILamZLZlBmeUpSZGs&part=id,snippet,authorDetails&key=AIzaSyDLg_WYQnAusH7XbAbrjxsLwTBTAxMkQO0"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const json = await response.json();
  //     setChats((chats) => {
  //       let newMessageList = [...data, ...chats];
  //       newMessageList = newMessageList.splice(0, CHAT_MESSAGES_LIMIT);
  //       return newMessageList;
  //     });
  //   } catch (error) {
  //     console.error("Fetching chat failed:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchChat();
  //   console.log("Setting interval to fetch chat");
  //   const id = setInterval(fetchChat, 10000);

  //   return () => {
  //     clearInterval(id); // Clear the interval on component unmount
  //     console.log("Interval cleared:", id);
  //   };
  // }, []);
  return (
    <div className="flex flex-wrap ">
      <VideoStream />
      <ChatUI2 />
    </div>
  );
};

export default LiveChatUi;
