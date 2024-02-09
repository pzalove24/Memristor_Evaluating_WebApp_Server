import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ListAllBenchmarkSetupsDto } from './dto/listAllBenchmarkSetups.dto';

@Injectable()
export class BenchmarkSetupsService {
  constructor(private readonly prismaService: PrismaService) {}

  async listAllBenchmarkSetups(
    listAllBenchmarkSetupsDto: ListAllBenchmarkSetupsDto,
  ) {
    // pagination on table benchmarksetup
    // query input / method & pulse / sweep & page & limit
    const { type, setup, voltage, page, limit } = listAllBenchmarkSetupsDto;

    const benchmarkType = await this.prismaService.benchmarkType.findFirst({
      where: {
        benchmarkTypeName: type,
      },
    });


    if (!benchmarkType) {
      throw new NotFoundException('BenchmarkType Not Found');
    }

    const skip = (page - 1) * limit;

    const totalCount = await this.prismaService.benchmarkInformation.count({
      where: {
        voltageType: voltage,
        benchmarkTypeId: benchmarkType.id,
      },
    });
    const totalPages = Math.ceil(totalCount / limit);

    const data = await this.prismaService.benchmarkInformation.findMany({
      where: {
        voltageType: voltage,
        benchmarkTypeId: benchmarkType.id
      },
      include: {
        benchmarkMethods: true,
      },
      skip,
      take: limit,
    });

    return {
      data,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
      },
    };
  }

  create(createBenchmarkSetupDto) {
    return 'This action adds a new benchmarkSetup';
  }

  findAll() {
    return `This action returns all benchmarkSetups`;
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
