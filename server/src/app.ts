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

io.on("connection", async (socket) => {
  socket.on("serialPortList", async () => {
    try {
      const ports = await SerialPort.list();
      socket.emit("COMPORT_SOCKET", ports);
    } catch (error) {
      console.error("Error listing serial ports:", error);
    }

    // SerialPort.list()
    //   .then((ports) => {
    //     ports.forEach((port) => {
    //       console.log(`Port: ${port.path}, Manufacturer: ${port.manufacturer}`);
    //       // Check if the port is open
    //       if (port.path) {
    //         console.log(`${port.path} is open.`);
    //         // Add the open port to the array
    //         openSerialPorts.push(port);
    //       } else {
    //         console.log(`${port.path} is not open.`);
    //       }
    //     });
    //     // Now you have an array of open serial ports
    //     console.log("Open serial ports:", openSerialPorts);
    //     socket.emit("COMPORT_SOCKET", openSerialPorts);
    //   })
    //   .catch((err) => {
    //     console.error("Error listing serial ports:", err);
    //   });
  });

  // var serialConnection = new SerialPort({
  //   path: "COM3",
  //   baudRate: 9600,
  // });

  // const parser = serialConnection.pipe(
  //   new ReadlineParser({ delimiter: "\r\n" })
  // );

  // //on data callback broadcast to the default socketio connection
  // serialConnection.on("open", function (err) {
  //   console.log(err);
  //   parser.on("data", function (benchmarkData) {
  //     console.log(benchmarkData);
  //     socket.emit("benchmark_data", benchmarkData);
  //   });
  //   if (err) {
  //     return console.log("Error opening serialConnection: ", err.message);
  //   }
  // });

  socket.on("selectedCOMPORT", (COM: string) => {
    if (COM) {
      var serialConnection = new SerialPort({
        path: COM,
        baudRate: 9600,
      });

      const parser = serialConnection.pipe(
        new ReadlineParser({ delimiter: "\r\n" })
      );

      //on data callback broadcast to the default socketio connection
      serialConnection.on("open", function (err) {
        console.log(err);
        parser.on("data", function (benchmarkData) {
          console.log(benchmarkData);
          socket.emit("benchmark_data", benchmarkData);
        });
        if (err) {
          return console.log("Error opening serialConnection: ", err.message);
        }
      });

      //relay socket.io writes to the serial port
      socket.on("command_benchmark", (command) => {
        console.log(command);
        serialConnection.write(command);
      });

      //close handling by frontend
      socket.on("disconnectCOMPORT", () => {
        serialConnection.close(function (err) {
          console.log("end serial connection", err);
        });
      });

      //close handling by backend
      serialConnection.on("close", function () {
        console.log("close serial connection");
        socket.emit("disconnectByUSB", "USBdisconnected");
      });

      //error handling
      serialConnection.on("error", function () {
        console.log("Can't establish serial connection " + COM);
        // process.exit(1);
      });
    }
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

// SERVER CONNECTION
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server Port: ${PORT} CONNECD`);
});
