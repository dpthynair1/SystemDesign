import React, { useEffect, useState } from "react";
import ChatWindow from "./ChatWindow";
import displayNameList from "../../Utils/ChatNames";

const ChatUI2 = () => {
  const [messages, setMessages] = useState([]);
  const [intervalCount, setIntervalCount] = useState(0); // Track setInterval calls
  const [clearIntervalCount, setClearIntervalCount] = useState(0);
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
    console.log("useEffect is called");
    const s = setInterval(() => {
      fetchChat();
      setIntervalCount((prevCount) => {
        console.log("Set interval is called" + (prevCount + 1));
        return prevCount + 1;
      });
    }, 5000);

    return () => {
      clearInterval(s);
      setClearIntervalCount((prevCount) => {
        console.log("ClearInterval is called. Count: " + (prevCount + 1));
        return prevCount + 1;
      });
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
