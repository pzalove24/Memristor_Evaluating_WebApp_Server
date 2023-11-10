import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import serialPortRoutes from "./routes/serialPortRoutes";
import http from "http";
import { createServer } from "node:http";
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
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);
});

// ROUTES
app.get("/", (req, res) => {
  res.send("HelloWorld");
});
app.use("/serialPort", serialPortRoutes);

// SERVER CONNECTION
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Port: ${PORT} CONNECD`);
});
