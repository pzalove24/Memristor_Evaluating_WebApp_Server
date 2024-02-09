import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ListAllBenchmarkSetupsDto } from './dto/listAllBenchmarkSetups.dto';
import { BenchmarkInput, BenchmarkMethod } from '@prisma/client';
import { PaginationResponseDto } from './dto/paganition.dto';

@Injectable()
export class BenchmarkSetupsService {
  constructor(private readonly prismaService: PrismaService) {}

  async listAllBenchmarkSetups(
    listAllBenchmarkSetupsDto: ListAllBenchmarkSetupsDto,
  ): Promise<PaginationResponseDto<BenchmarkInput | BenchmarkMethod>> {
    // pagination on table benchmarksetup
    // query input / method & pulse / sweep & page & limit
    const { type, setup, voltage, method, page, limit } =
      listAllBenchmarkSetupsDto;

    const benchmarkType = await this.prismaService.benchmarkType.findFirst({
      where: {
        benchmarkTypeName: type,
      },
    });

    if (!benchmarkType) {
      throw new NotFoundException('BenchmarkType Not Found');
    }

    const skip = (page - 1) * limit;

    if (setup === 'Input') {
      const totalCount = await this.prismaService.benchmarkInput.count({
        where: {
          voltageType: voltage,
        },
      });
      const totalPages = Math.ceil(totalCount / limit);
      const inputData = await this.prismaService.benchmarkInput.findMany({
        where: {
          voltageType: voltage,
        },
        include: {
          benchmarkInputSetups: true,
        },
        skip,
        take: limit,
      });
      return {
        rows: inputData,
        currentPage: page,
        totalPages,
        totalCount,
      };
    } else if (setup === 'Method') {
      const totalCount = await this.prismaService.benchmarkMethod.count({
        where: {
          voltageType: voltage,
          methodType: method,
        },
      });
      const totalPages = Math.ceil(totalCount / limit);
      const methodData = await this.prismaService.benchmarkMethod.findMany({
        where: {
          voltageType: voltage,
          methodType: method,
        },
        include: {
          BenchmarkInput: true,
          BenchmarkInformation: true,
        },
        skip,
        take: limit,
      });
      return {
        rows: methodData,
        currentPage: page,
        totalPages,
        totalCount,
      };
    }
  }

  create(createBenchmarkSetupDto) {
    return 'This action adds a new benchmarkSetup';
  }

  findOne(id: number) {
    return `This action returns a #${id} benchmarkSetup`;
  }

  update(id: number) {
    return `This action updates a #${id} benchmarkSetup`;
  }

  remove(id: number) {
    return `This action removes a #${id} benchmarkSetup`;
  }
}
