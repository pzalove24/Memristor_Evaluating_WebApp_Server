import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import http from "http";
import { Server } from "socket.io";
import { SerialPort, ReadlineParser } from "serialport";
import { serialPortCommand } from "./socket/serialPortSocket";

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("combined"));
app.use(cors());

// SOCKET.IO CONFIGURATION
const CLIENT_URL = process.env.CLIENT_URL;
const server = http.createServer(app);

//**SERIALPORT SOCKET.IO**\\
const io = new Server(server, {
  cors: {
    origin: `${CLIENT_URL}`,
    methods: ["GET", "POST"],
  },
});

// io.on("connection", (socket) => {
//   console.log("User connected: ", socket.id);

//   socket.on("send_message", (data) => {
//     console.log(data);
//     socket.emit("receive_message", data);
//   });
// });
//**END**\\

// SERIALPORT

// const onConnection = (socket: any) => {

// };

var serialConnection = new SerialPort({
  path: "COM3",
  baudRate: 9600,
});

const parser = serialConnection.pipe(new ReadlineParser({ delimiter: "\r\n" }));

io.on("connection", (socket) => {
  //relay socket.io writes to the serial port
  // socket.on("data", (data) => {
  //   serialConnection.write(data);
  // });
  serialConnection.open(function (err) {
    if (err) {
      return console.log("Error opening serialConnection: ", err.message);
    }
  });
  parser.on("data", function (data) {
    console.log(data);
    // io.emit("data", data);
    socket.emit("receive_message", data);
  });
  console.log("User connected: ", socket.id);
  // serialPortCommand(socket);
  // socket.on("send_message", (data) => {
  //   console.log(data);
  //   socket.emit("receive_message", data);
  // });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

//on data callback broadcast to the default socketio connection
// serialConnection.on("open", onConnection);

// //close handling
// serialConnection.on("close", function () {
//   console.error("close serial connection with " + "COM3");
// });

// //error handling
// serialConnection.on("error", function () {
//   console.error("Can't establish serial connection with " + "COM3");
//   // process.exit(1);
// });

// SERVER CONNECTION
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server Port: ${PORT} CONNECD`);
});
