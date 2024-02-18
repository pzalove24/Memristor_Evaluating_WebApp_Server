import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ListAllBenchmarkSetupsDto } from './dto/listAllBenchmarkSetups.dto';
import {
  BenchmarkInformation,
  BenchmarkInput,
  BenchmarkInputSetup,
  BenchmarkMethod,
  MethodType,
  VoltageType,
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
    const { type, setup, voltageType, methodType, page, limit } =
      listAllBenchmarkSetupsDto;

    let voltages: VoltageType[] = undefined;
    let methods: MethodType[] = undefined;

    if (voltageType) {
      const voltageTypes = voltageType.split(',');
      voltages = await this.prismaService.voltageType.findMany({
        where: {
          name: { in: voltageTypes },
        },
      });
      if (!voltages) {
        throw new NotFoundException('voltageType Not Found');
      }
    }

    if (methodType) {
      const methodTypes = methodType.split(',');
      methods = await this.prismaService.methodType.findMany({
        where: {
          name: { in: methodTypes },
        },
      });
      if (!methods) {
        throw new NotFoundException('methodType Not Found');
      }
    }

    const benchmarkType =
      await this.prismaService.benchmarkType.findFirstOrThrow({
        where: {
          benchmarkTypeName: type,
        },
      });

    if (!benchmarkType) {
      throw new NotFoundException('benchmarkType Not Found');
    }

    const skip = (page - 1) * limit;

    if (setup === 'Input') {
      const totalCount = await this.prismaService.benchmarkInput.count({
        where: {
          voltageTypeId: voltageType
            ? { in: voltages.map((voltage) => voltage.id) }
            : undefined,
          benchmarkTypeId: benchmarkType.id,
        },
      });
      const totalPages = Math.ceil(totalCount / limit);
      const inputData = await this.prismaService.benchmarkInput.findMany({
        where: {
          voltageTypeId: voltageType
            ? { in: voltages.map((voltage) => voltage.id) }
            : undefined,
          benchmarkTypeId: benchmarkType.id,
        },
        include: {
          voltageType: true,
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
          voltageTypeId: voltageType
            ? { in: voltages.map((voltage) => voltage.id) }
            : undefined,
          methodTypeId: methodType
            ? { in: methods.map((method) => method.id) }
            : undefined,
          benchmarkTypeId: benchmarkType.id,
        },
      });
      const totalPages = Math.ceil(totalCount / limit);
      const methodData = await this.prismaService.benchmarkMethod.findMany({
        where: {
          voltageTypeId: voltageType
            ? { in: voltages.map((voltage) => voltage.id) }
            : undefined,
          methodTypeId: methodType
            ? { in: methods.map((method) => method.id) }
            : undefined,
          benchmarkTypeId: benchmarkType.id,
        },
        include: {
          voltageType: true,
          methodType: true,
          BenchmarkInput: true,
          BenchmarkInformation: true,
          BenchmarkUnit: true,
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

  async listBenchmarkInputSetup(id: string): Promise<BenchmarkInputSetup[]> {
    const listBenchmarkInputSetup =
      await this.prismaService.benchmarkInputSetup.findMany({
        where: {
          benchmarkInputId: id,
        },
        include: {
          dataType: true,
          BenchmarkUnit: true,
        },
      });

    if (!listBenchmarkInputSetup) {
      throw new NotFoundException('BenchmarkInputSetup Not Found');
    }

    return listBenchmarkInputSetup;
  }

  async upsertBenchmarkInput(
    upsertBenchmarkInputDto: UpsertBenchmarkInputDto,
  ): Promise<BenchmarkInput> {
    const { benchmarkInputName, voltageTypeId, benchmarkTypeId } =
      upsertBenchmarkInputDto;

    const upsertBenchmarkInput = await this.prismaService.benchmarkInput.upsert(
      {
        where: {
          benchmarkInputName,
        },
        update: {
          benchmarkInputName,
          voltageTypeId,
          benchmarkTypeId,
        },
        create: {
          active: true,
          benchmarkInputName,
          voltageTypeId,
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
        voltageTypeId,
        dataTypeId,
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
            voltageTypeId,
            dataTypeId,
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
            voltageTypeId,
            dataTypeId,
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
      voltageTypeId,
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
          voltageTypeId,
          benchmarkTypeId,
        },
        create: {
          active,
          benchmarkInfoName,
          abbreviation,
          voltageTypeId,
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
      methodTypeId,
      voltageTypeId,
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
          methodTypeId,
          voltageTypeId,
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
          methodTypeId,
          voltageTypeId,
          beforeBenchmark,
          inSoftware,
          benchmarkInformationId,
          benchmarkTypeId,
        },
      });

    return upsertBenchmarkMethod;
  }

  async findAllVoltageType(): Promise<VoltageType[]> {
    return await this.prismaService.voltageType.findMany();
  }

  async findAllMethodType(): Promise<MethodType[]> {
    return await this.prismaService.methodType.findMany();
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
