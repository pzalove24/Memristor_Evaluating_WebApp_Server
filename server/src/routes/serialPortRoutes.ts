import express from "express";
import { getSerialPort } from "../controllers/serialPortControllers";

const router = express.Router();

router.get("/connection", getSerialPort);

export default router;
