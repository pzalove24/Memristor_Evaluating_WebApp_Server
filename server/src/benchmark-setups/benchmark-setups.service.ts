import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  FilteredBenchmarkSetupsDto,
  ListAllBenchmarkSetupsDto,
} from './dto/listAllBenchmarkSetups.dto';
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
import { UpsertBenchmarkInputBenchmarkInputSetupDto } from './dto/upsertBenchmarkInputBenchmarkInputSetup.dto';
import { UpsertBenchmarkInformationDto } from './dto/upsertBenchmarkInformation.dto';
import { UpsertBenchmarkMethodDto } from './dto/upsertBenchmarkMethod.dto';
import { ListAllBenchmarkInputNameDto } from './dto/listAllBenchmarkInputName.dto';
import { ListAllBenchmarkMethodNameDto } from './dto/listAllBenchmarkMethodName.dto';
import { CreateBenchmarkInputBenchmarkInputSetupDto } from './dto/createBenchmarkInputBenchmarkInputSetup.dto';

@Injectable()
export class BenchmarkSetupsService {
  constructor(private readonly prismaService: PrismaService) {}

  async handleQueryBenchmarkType(type: string) {
    const benchmarkType =
      await this.prismaService.benchmarkType.findFirstOrThrow({
        where: {
          benchmarkTypeName: type,
        },
      });

    if (!benchmarkType) {
      throw new NotFoundException('benchmarkType Not Found');
    }

    return benchmarkType;
  }

  async handleQueryVoltageType(
    voltageType: string,
  ): Promise<VoltageType[] | undefined> {
    if (voltageType) {
      const voltageTypes = voltageType.split(',');
      const voltages = await this.prismaService.voltageType.findMany({
        where: {
          name: { in: voltageTypes },
        },
      });
      if (!voltages) {
        throw new NotFoundException('voltageType Not Found');
      }

      return voltages;
    }

    return undefined;
  }

  async handleQueryMethodType(
    methodType: string,
  ): Promise<MethodType[] | undefined> {
    if (methodType) {
      const methodTypes = methodType.split(',');
      const methods = await this.prismaService.methodType.findMany({
        where: {
          name: { in: methodTypes },
        },
      });
      if (!methods) {
        throw new NotFoundException('methodType Not Found');
      }
      return methods;
    }

    return undefined;
  }

  async listAllBenchmarkSetups(
    listAllBenchmarkSetupsDto: ListAllBenchmarkSetupsDto,
    filteredBenchmarkSetupsDto: FilteredBenchmarkSetupsDto,
  ): Promise<PaginationResponseDto<BenchmarkInput | BenchmarkMethod>> {
    // pagination on table benchmarksetup
    // query input / method & pulse / sweep & page & limit
    const { type, setup, voltageType, methodType, page, limit } =
      listAllBenchmarkSetupsDto;

    const voltages = await this.handleQueryVoltageType(voltageType);
    const methods = await this.handleQueryMethodType(methodType);
    const benchmarkType = await this.handleQueryBenchmarkType(type);

    const { filteredBenchmarks } = filteredBenchmarkSetupsDto;

    console.log('input', filteredBenchmarks);

    const skip = (page - 1) * limit;

    if (setup === 'Input') {
      const totalCount = await this.prismaService.benchmarkInput.count({
        where: {
          voltageTypeId: { in: voltages?.map((voltage) => voltage.id) },
          benchmarkTypeId: benchmarkType.id,
          id: { in: filteredBenchmarks?.map((input) => input.id) },
        },
      });
      const totalPages = Math.ceil(totalCount / limit);
      const inputData = await this.prismaService.benchmarkInput.findMany({
        where: {
          voltageTypeId: { in: voltages?.map((voltage) => voltage.id) },
          benchmarkTypeId: benchmarkType.id,
          id: { in: filteredBenchmarks?.map((input) => input.id) },
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
          voltageTypeId: { in: voltages?.map((voltage) => voltage.id) },
          methodTypeId: { in: methods?.map((method) => method.id) },
          benchmarkTypeId: benchmarkType.id,
          id: { in: filteredBenchmarks?.map((method) => method.id) },
        },
      });
      const totalPages = Math.ceil(totalCount / limit);
      const methodData = await this.prismaService.benchmarkMethod.findMany({
        where: {
          voltageTypeId: { in: voltages?.map((voltage) => voltage.id) },
          methodTypeId: { in: methods?.map((method) => method.id) },
          benchmarkTypeId: benchmarkType.id,
          id: { in: filteredBenchmarks?.map((method) => method.id) },
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
          voltageType: true,
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

  async upsertBenchmarkInputBenchmarkInputSetup(
    upsertBenchmarkInputSetupDto: UpsertBenchmarkInputBenchmarkInputSetupDto,
  ): Promise<BenchmarkInputSetup[]> {
    let listBenchmarkInputSetup: BenchmarkInputSetup[] = [];

    // do the upsert for the rest of them
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

    // await this.prismaService.benchmarkInput.update({
    //   where: {
    //     id: listBenchmarkInputSetup[0].benchmarkInputId,
    //   },
    //   data: {
    //     benchmarkInputSetups: {
    //       update: listBenchmarkInputSetup
    //     }
    //   },
    // });

    console.log('listBenchmarkInputSetup', listBenchmarkInputSetup);

    // // if some of list is gone, then delete
    // const currentBenchmarkInputSetup =
    //   await this.prismaService.benchmarkInputSetup.findMany({
    //     where: {
    //       benchmarkInputId:
    //         upsertBenchmarkInputSetupDto.benchmarkInputSetupList[0]
    //           .benchmarkInputId,
    //     },
    //   });

    // const deletedBenchmarkInputSetup = currentBenchmarkInputSetup.filter(
    //   (deletedData) =>
    //     upsertBenchmarkInputSetupDto.benchmarkInputSetupList.includes(
    //       deletedData,
    //     ),
    // );

    // await this.prismaService.benchmarkInputSetup.deleteMany({
    //   where: {
    //     id: {
    //       in: deletedBenchmarkInputSetup?.map((deletedData) => deletedData.id),
    //     },
    //   },
    // });

    return listBenchmarkInputSetup;
  }

  async createBenchmarkInputBenchmarkInputSetup(
    createBenchmarkInputBenchmarkInputSetup: CreateBenchmarkInputBenchmarkInputSetupDto,
  ) {
    const newAddBenchmarkInputSetup: BenchmarkInputSetup = {
      benchmarkUnitId: 'clro1tk43000208jvcfrq4xb9',
      voltageTypeId: 'clsqfnn5b000308lb1sxg5ft8',
      dataTypeId: 'clsqfqe5x000708lbdk7yedei',
      benchmarkInputSetupName: 'New BenchmarkSetup',
      decimalNumber: 2,
      exampleData: '1.00',
      upperLimit: 3.0,
      lowerLimit: 1.0,
      stepIncreasing: 1,
      benchmarkInputId:
        createBenchmarkInputBenchmarkInputSetup.benchmarkInputId,
    };

    return await this.prismaService.benchmarkInput.update({
      where: { id: createBenchmarkInputBenchmarkInputSetup.benchmarkInputId },
      data: {
        benchmarkInputSetups: {
          create: newAddBenchmarkInputSetup,
        },
      },
    });
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

  async findAllBenchmarkInputName(
    queryInputName: ListAllBenchmarkInputNameDto,
  ): Promise<BenchmarkInput[]> {
    const { type, searchName, voltageType } = queryInputName;

    const benchmarkType = await this.handleQueryBenchmarkType(type);
    const voltages = await this.handleQueryVoltageType(voltageType);

    const searchAllBenchmarkInputName =
      await this.prismaService.benchmarkInput.findMany({
        where: {
          AND: {
            benchmarkInputName: {
              contains: searchName,
            },
            BenchmarkType: benchmarkType,
            voltageTypeId: {
              in: voltages?.map((voltage) => voltage.id),
            },
          },
        },
        take: 5,
      });

    return searchAllBenchmarkInputName;
  }

  async findAllBenchmarkMethodName(
    queryMethodName: ListAllBenchmarkMethodNameDto,
  ): Promise<BenchmarkMethod[]> {
    const { type, searchName, voltageType, methodType } = queryMethodName;

    const benchmarkType = await this.handleQueryBenchmarkType(type);
    const voltages = await this.handleQueryVoltageType(voltageType);
    const methods = await this.handleQueryMethodType(methodType);

    const searchAllBenchmarkMethodName =
      await this.prismaService.benchmarkMethod.findMany({
        where: {
          AND: {
            benchmarkMethodName: {
              contains: searchName,
            },
            BenchmarkType: benchmarkType,
            voltageTypeId: {
              in: voltages?.map((voltage) => voltage.id),
            },
            methodTypeId: {
              in: methods?.map((method) => method.id),
            },
          },
        },
        take: 5,
      });

    return searchAllBenchmarkMethodName;
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
