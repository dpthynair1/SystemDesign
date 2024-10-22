import React, { useEffect, useState } from "react";
import ChatWindow from "./ChatWindow";
import displayNameList from "../../Utils/ChatNames";

const ChatUI2 = () => {
  const [messages, setMessages] = useState([]);
  const CHAT_LIMIT = 17;
  function generadisplayNames() {
    var findisplayName =
      displayNameList[Math.floor(Math.random() * displayNameList.length)];
    return findisplayName;
  }
  const fetchChat = () => {
    const data = [
      {
        displayName: generadisplayNames(),
        photo:
          "https://yt4.ggpht.com/zYmqKzmpe7tii989E4d7grHsSgm3SxW7m_iViiBSIWEs2R0t93XMd7bF9UlveEVU2UFY1LgK=s32-c-k-c0x00ffffff-no-rj",
        message: "This is a live chat from frontend system design",
      },
      {
        displayName: generadisplayNames(),
        photo:
          "https://yt4.ggpht.com/zYmqKzmpe7tii989E4d7grHsSgm3SxW7m_iViiBSIWEs2R0t93XMd7bF9UlveEVU2UFY1LgK=s32-c-k-c0x00ffffff-no-rj",
        message: "This is a live chat from frontend system design",
      },
      {
        displayName: generadisplayNames(),
        photo:
          "https://yt4.ggpht.com/zYmqKzmpe7tii989E4d7grHsSgm3SxW7m_iViiBSIWEs2R0t93XMd7bF9UlveEVU2UFY1LgK=s32-c-k-c0x00ffffff-no-rj",
        message: "This is a live chat from frontend system design",
      },
      {
        displayName: generadisplayNames(),
        photo:
          "https://yt4.ggpht.com/zYmqKzmpe7tii989E4d7grHsSgm3SxW7m_iViiBSIWEs2R0t93XMd7bF9UlveEVU2UFY1LgK=s32-c-k-c0x00ffffff-no-rj",
        message: "This is a live chat from frontend system design",
      },
      {
        displayName: generadisplayNames(),
        photo:
          "https://yt4.ggpht.com/zYmqKzmpe7tii989E4d7grHsSgm3SxW7m_iViiBSIWEs2R0t93XMd7bF9UlveEVU2UFY1LgK=s32-c-k-c0x00ffffff-no-rj",
        message: "This is a live chat from frontend system design",
      },
      {
        displayName: generadisplayNames(),
        photo:
          "https://yt4.ggpht.com/zYmqKzmpe7tii989E4d7grHsSgm3SxW7m_iViiBSIWEs2R0t93XMd7bF9UlveEVU2UFY1LgK=s32-c-k-c0x00ffffff-no-rj",
        message: "This is a live chat from frontend system design",
      },
      {
        displayName: generadisplayNames(),
        photo:
          "https://yt4.ggpht.com/zYmqKzmpe7tii989E4d7grHsSgm3SxW7m_iViiBSIWEs2R0t93XMd7bF9UlveEVU2UFY1LgK=s32-c-k-c0x00ffffff-no-rj",
        message: "This is a live chat from frontend system design",
      },
      {
        displayName: generadisplayNames(),
        photo:
          "https://yt4.ggpht.com/zYmqKzmpe7tii989E4d7grHsSgm3SxW7m_iViiBSIWEs2R0t93XMd7bF9UlveEVU2UFY1LgK=s32-c-k-c0x00ffffff-no-rj",
        message: "This is a live chat from frontend system design",
      },
    ];

    setMessages((messages) => {
      let newMessageList = [...data, ...messages];
      newMessageList = newMessageList.splice(0, CHAT_LIMIT);
      return newMessageList;
    });
  };
  useEffect(() => {
    const s = setInterval(fetchChat, 1000);

    return () => {
      clearInterval(s);
    };
  }, []);

  return (
    <div
      className="w-[38rem]
  h-[600px] border border-solid-gray border-gray-400 m-5  overflow-y-auto flex-col-reverse"
    >
      {messages.map((message, i) => (
        <ChatWindow
          key={i}
          {...message}
        />
      ))}
    </div>
  );
};

export default ChatUI2;
