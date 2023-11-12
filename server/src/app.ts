import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import serialPortRoutes from "./routes/serialPortRoutes";
import http from "http";
import { Server } from "socket.io";

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

const io = new Server(server, {
  cors: {
    origin: `${CLIENT_URL}`,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);

  socket.on("send_message", (data) => {
    console.log(data)
    socket.broadcast.emit("receive_message", data)
  });
});

// ROUTES
app.get("/", (req, res) => {
  res.send("HelloWorld");
});
app.use("/serialPort", serialPortRoutes);

// SERVER CONNECTION
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server Port: ${PORT} CONNECD`);
});
