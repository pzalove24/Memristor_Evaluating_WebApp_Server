import express from "express";
import { getBenchmarkInformations, getBenchmarkTypes } from "../../controllers/benchmark/benchmarkController";

const router = express.Router();

router.get("/benchmarkTypes", getBenchmarkTypes);
router.get("/benchmarkInformations", getBenchmarkInformations);


export default router;