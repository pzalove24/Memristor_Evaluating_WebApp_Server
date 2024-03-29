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
  BenchmarkUnit,
  DataType,
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
import { createId } from '@paralleldrive/cuid2';
import { CreateBenchmarkInputBenchmarkInputSetupResponseDto } from './dto/createBenchmarkInputBenchmarkInputSetup.dto';
import { UpsertCancelBenchmarkInputBenchmarkInputSetupDto } from './dto/upsertCancelBenchmarkInputBenchmarkInputSetup.dto';

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

    // console.log('input', filteredBenchmarks);

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
          benchmarkUnit: true,
        },
        orderBy: {
          orderIndex: 'asc',
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

    // const benchmarkInput = await this.prismaService.benchmarkInput.findUnique({
    //   where: {
    //     id: upsertBenchmarkInputSetupDto.benchmarkInputSetupList[0]
    //       .benchmarkInputId,
    //   },
    // });

    //update orderIndex

    const getOrderIndexRange = (end: number): number[] => {
      const range: number[] = [];
      for (let i = 0; i <= end - 1; i++) {
        range.push(i);
      }
      return range;
    };

    // Check if the length of data1 and numbers is the same
    if (upsertBenchmarkInputSetupDto.benchmarkInputSetupList.length > 0) {
      // Replace orderIndex values in data1 with numbers
      const numbersOrderIndex = getOrderIndexRange(
        upsertBenchmarkInputSetupDto.benchmarkInputSetupList.length,
      );
      upsertBenchmarkInputSetupDto.benchmarkInputSetupList.forEach(
        (item, index) => {
          item.orderIndex = numbersOrderIndex[index];
        },
      );
    }

    // do the upsert for the rest of them
    for (const benchmarkInputSetup of upsertBenchmarkInputSetupDto.benchmarkInputSetupList) {
      const {
        id,
        orderIndex,
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
            orderIndex,
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
            orderIndex,
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

    // if some of list is gone, then delete
    await this.prismaService.benchmarkInputSetup.deleteMany({
      where: {
        id: {
          in: upsertBenchmarkInputSetupDto.deleteBenchmarkInputSetupList?.map(
            (deleteInputSetup) => deleteInputSetup.id,
          ),
        },
      },
    });

    return listBenchmarkInputSetup;
  }

  async createBenchmarkInputBenchmarkInputSetup(
    id: string,
  ): Promise<BenchmarkInputSetup> {
    const orderIndexList =
      await this.prismaService.benchmarkInputSetup.findMany({
        where: {
          benchmarkInputId: id,
        },
        select: {
          orderIndex: true,
        },
      });

    const newBenchmarkInputSetup =
      await this.prismaService.benchmarkInputSetup.create({
        data: {
          orderIndex: orderIndexList.length,
          benchmarkUnitId: 'clro1tk43000208jvcfrq4xb9',
          voltageTypeId: 'clsqfnn5b000308lb1sxg5ft8',
          dataTypeId: 'clsqfqe5x000708lbdk7yedei',
          benchmarkInputSetupName: 'New BenchmarkSetup',
          decimalNumber: 2,
          exampleData: '1.00',
          upperLimit: 3.0,
          lowerLimit: -2.0,
          stepIncreasing: 0.5,
          benchmarkInputId: id,
        },
      });

    return newBenchmarkInputSetup;
  }

  async upsertCancelBenchmarkInputBenchmarkInputSetup(
    upsertCancelBenchmarkInputBenchmarkInputSetupDto: UpsertCancelBenchmarkInputBenchmarkInputSetupDto,
  ): Promise<BenchmarkInputSetup[]> {
    let cancelListBenchmarkInputSetup: BenchmarkInputSetup[] = [];

    // const benchmarkInput = await this.prismaService.benchmarkInput.findUnique({
    //   where: {
    //     id: upsertBenchmarkInputSetupDto.benchmarkInputSetupList[0]
    //       .benchmarkInputId,
    //   },
    // });

    // do the upsert for the rest of them

    if (
      upsertCancelBenchmarkInputBenchmarkInputSetupDto.benchmarkInputSetupList
        .length > 0
    ) {
      for (const benchmarkInputSetup of upsertCancelBenchmarkInputBenchmarkInputSetupDto.benchmarkInputSetupList) {
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

        //find cancel data
        const cancelData =
          await this.prismaService.benchmarkInputSetup.findFirst({
            where: {
              id,
            },
          });

        // if it found cancel data, that mean it the new data create by ADD INPUTSETUP
        // so we have to delete that new data
        if (cancelData) {
          const deleteBenchmarkInputSetup =
            await this.prismaService.benchmarkInputSetup.delete({
              where: {
                id,
              },
            });

          cancelListBenchmarkInputSetup.push(deleteBenchmarkInputSetup);
        } else {
          //if it not found cancel data, that mean the data is already delete in frontend by delete button
          //so create new data by using the same dataset of benchmarkInputSetup
          const orderIndexList =
            await this.prismaService.benchmarkInputSetup.findMany({
              where: {
                benchmarkInputId,
              },
              select: {
                orderIndex: true,
              },
            });

          const upsertBenchmarkInputSetup =
            await this.prismaService.benchmarkInputSetup.create({
              data: {
                id,
                orderIndex: orderIndexList.length,
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

          cancelListBenchmarkInputSetup.push(upsertBenchmarkInputSetup);
        }
      }
    }

    return cancelListBenchmarkInputSetup;
  }

  async deleteBenchmarkInputBenchmarkInputSetup(
    id: string,
  ): Promise<BenchmarkInputSetup> {
    const deleteBenchmarkInputSetup =
      await this.prismaService.benchmarkInputSetup.delete({
        where: {
          id,
        },
      });

    return deleteBenchmarkInputSetup;
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

  async findAllBenchmarkUnit(): Promise<BenchmarkUnit[]> {
    return await this.prismaService.benchmarkUnit.findMany();
  }

  async findAllDataType(): Promise<DataType[]> {
    return await this.prismaService.dataType.findMany();
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
