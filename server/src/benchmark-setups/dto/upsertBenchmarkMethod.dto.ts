import { BenchmarkMethod } from "@prisma/client";
import { IsNotEmpty } from "class-validator";

export class UpsertBenchmarkMethodDto {

    @IsNotEmpty()
    benchmarkMethod: BenchmarkMethod
}