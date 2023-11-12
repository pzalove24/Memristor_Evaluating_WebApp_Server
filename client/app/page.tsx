"use client";

import * as React from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

export default function Home() {
  const [message, setMessage] = React.useState('')

  const sendMessage = () => {
    socket.emit("send_message", { message: "hellii" });
  };

  React.useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessage(data.message)
    });
  }, [socket]);

  return (
    <main>
      <button title={"socketTest"} onClick={sendMessage}>
        click me
      </button>
      <div>
        {message}
      </div>
    </main>
  );
}
