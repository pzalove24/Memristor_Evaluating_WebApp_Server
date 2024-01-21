import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getBenchmarkTypes = async (req: Request, res: Response) => {
  try {
    const benchmarkTypes = await prisma.benchmarkType.findMany({
      include: {
        benchmarkInformations: true,
      },
    });
    res.status(200).json(benchmarkTypes);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getBenchmarkInformations = async (req: Request, res: Response) => {
  try {
    const benchmarkInformations = await prisma.benchmarkInformation.findMany();
    res.status(200).json(benchmarkInformations);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
