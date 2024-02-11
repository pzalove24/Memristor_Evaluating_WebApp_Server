import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ListAllBenchmarkSetupsDto } from './dto/listAllBenchmarkSetups.dto';
import {
  BenchmarkInformation,
  BenchmarkInput,
  BenchmarkInputSetup,
  BenchmarkMethod,
} from '@prisma/client';
import { PaginationResponseDto } from './dto/paganition.dto';
import { UpsertBenchmarkInputDto } from './dto/upsertBenchmarkInput.dto';
import { UpsertBenchmarkInputSetupDto } from './dto/upsertBenchmarkInputSetup.dto';
import { UpsertBenchmarkInformationDto } from './dto/upsertBenchmarkInformation.dto';
import { UpsertBenchmarkMethodDto } from './dto/upsertBenchmarkMethod.dto';

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
          benchmarkTypeId: benchmarkType.id,
        },
      });
      const totalPages = Math.ceil(totalCount / limit);
      const inputData = await this.prismaService.benchmarkInput.findMany({
        where: {
          voltageType: voltage,
          benchmarkTypeId: benchmarkType.id,
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
          benchmarkTypeId: benchmarkType.id,
        },
      });
      const totalPages = Math.ceil(totalCount / limit);
      const methodData = await this.prismaService.benchmarkMethod.findMany({
        where: {
          voltageType: voltage,
          methodType: method,
          benchmarkTypeId: benchmarkType.id,
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

  async upsertBenchmarkInput(
    upsertBenchmarkInputDto: UpsertBenchmarkInputDto,
  ): Promise<BenchmarkInput> {
    const { benchmarkInputName, voltageType, benchmarkTypeId } =
      upsertBenchmarkInputDto;

    const upsertBenchmarkInput = await this.prismaService.benchmarkInput.upsert(
      {
        where: {
          benchmarkInputName,
        },
        update: {
          benchmarkInputName,
          voltageType,
          benchmarkTypeId,
        },
        create: {
          active: true,
          benchmarkInputName,
          voltageType,
          benchmarkTypeId,
        },
      },
    );

    return upsertBenchmarkInput;
  }

  async upsertBenchmarkInputSetup(
    upsertBenchmarkInputSetupDto: UpsertBenchmarkInputSetupDto,
  ): Promise<BenchmarkInputSetup[]> {
    let listBenchmarkInputSetup: BenchmarkInputSetup[] = [];

    for (const benchmarkInputSetup of upsertBenchmarkInputSetupDto.benchmarkInputSetupList) {
      const {
        id,
        benchmarkUnitId,
        benchmarkInputSetupName,
        voltageType,
        dataType,
        decimalNumber,
        exampleData,
        upperLimit,
        lowerLimit,
        stepIncreasing,
        benchmarkInputId,
      } = benchmarkInputSetup;

      const upsertBenchmarkInputSetup =
        await this.prismaService.benchmarkInputSetup.upsert({
          where: {
            id: id,
          },
          update: {
            benchmarkUnitId,
            benchmarkInputSetupName,
            voltageType,
            dataType,
            decimalNumber,
            exampleData,
            upperLimit,
            lowerLimit,
            stepIncreasing,
            benchmarkInputId,
          },
          create: {
            benchmarkUnitId,
            benchmarkInputSetupName,
            voltageType,
            dataType,
            decimalNumber,
            exampleData,
            upperLimit,
            lowerLimit,
            stepIncreasing,
            benchmarkInputId,
          },
        });

      listBenchmarkInputSetup.push(upsertBenchmarkInputSetup);
    }

    return listBenchmarkInputSetup;
  }

  async upsertBenchmarkInformation(
    upsertBenchmarkInformationDto: UpsertBenchmarkInformationDto,
  ): Promise<BenchmarkInformation> {
    const {
      id,
      active,
      benchmarkInfoName,
      abbreviation,
      voltageType,
      benchmarkTypeId,
    } = upsertBenchmarkInformationDto.benchmarkInformation;

    const upsertBenchmarkInformation =
      await this.prismaService.benchmarkInformation.upsert({
        where: {
          id: id,
        },
        update: {
          active,
          benchmarkInfoName,
          abbreviation,
          voltageType,
          benchmarkTypeId,
        },
        create: {
          active,
          benchmarkInfoName,
          abbreviation,
          voltageType,
          benchmarkTypeId,
        },
      });

    return upsertBenchmarkInformation;
  }

  async upsertBenchmarkMethod(
    upsertBenchmarkMethodDto: UpsertBenchmarkMethodDto,
  ): Promise<BenchmarkMethod> {
    const {
      id,
      benchmarkInputId,
      benchmarkUnitId,
      active,
      benchmarkMethodName,
      methodType,
      voltageType,
      beforeBenchmark,
      inSoftware,
      benchmarkInformationId,
      benchmarkTypeId,
    } = upsertBenchmarkMethodDto.benchmarkMethod;

    const upsertBenchmarkMethod =
      await this.prismaService.benchmarkMethod.upsert({
        where: {
          id: id,
        },
        update: {
          benchmarkInputId,
          benchmarkUnitId,
          active,
          benchmarkMethodName,
          methodType,
          voltageType,
          beforeBenchmark,
          inSoftware,
          benchmarkInformationId,
          benchmarkTypeId,
        },
        create: {
          benchmarkInputId,
          benchmarkUnitId,
          active,
          benchmarkMethodName,
          methodType,
          voltageType,
          beforeBenchmark,
          inSoftware,
          benchmarkInformationId,
          benchmarkTypeId,
        },
      });

    return upsertBenchmarkMethod;
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
