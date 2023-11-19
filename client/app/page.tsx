"use client";

import * as React from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

export default function Home() {
  const [message, setMessage] = React.useState("");
  const [inputMessage, setInputMessage] = React.useState("second");

  const sendMessage = () => {
    socket.emit("send_message", { message: inputMessage });
  };

  React.useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessage(data.message);
    });
  }, [socket]);

  return (
    <main>
      <input
        title="message"
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button title={"socketTest"} onClick={sendMessage}>
        click me
      </button>
      <div>{message}</div>
    </main>
  );
}
