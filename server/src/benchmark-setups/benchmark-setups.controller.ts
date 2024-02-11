import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { BenchmarkSetupsService } from './benchmark-setups.service';
import { ListAllBenchmarkSetupsDto } from './dto/listAllBenchmarkSetups.dto';
import { UpsertBenchmarkInputDto } from './dto/upsertBenchmarkInput.dto';
import {
  BenchmarkInformation,
  BenchmarkInput,
  BenchmarkInputSetup,
  BenchmarkMethod,
} from '@prisma/client';
import { PaginationResponseDto } from './dto/paganition.dto';
import { UpsertBenchmarkInputSetupDto } from './dto/upsertBenchmarkInputSetup.dto';
import { UpsertBenchmarkInformationDto } from './dto/upsertBenchmarkInformation.dto';
import { UpsertBenchmarkMethodDto } from './dto/upsertBenchmarkMethod.dto';

@Controller('benchmark-setups')
export class BenchmarkSetupsController {
  constructor(
    private readonly benchmarkSetupsService: BenchmarkSetupsService,
  ) {}

  @Get()
  listAllBenchmarkSetups(
    @Query() listAllBenchmarkSetupsDto: ListAllBenchmarkSetupsDto,
  ): Promise<PaginationResponseDto<BenchmarkInput | BenchmarkMethod>> {
    return this.benchmarkSetupsService.listAllBenchmarkSetups(
      listAllBenchmarkSetupsDto,
    );
  }

  @Get('/benchmarkInputSetup/:id')
  listBenchmarkInputSetup(
    @Param('id') id: string,
  ): Promise<BenchmarkInputSetup[]> {
    return this.benchmarkSetupsService.listBenchmarkInputSetup(id);
  }

  @Put('/benchmarkInput')
  async upsertBenchmarkInput(
    @Body() upsertBenchmarkInputDto: UpsertBenchmarkInputDto,
  ): Promise<BenchmarkInput> {
    return this.benchmarkSetupsService.upsertBenchmarkInput(
      upsertBenchmarkInputDto,
    );
  }

  @Put('/benchmarkInputSetup')
  async upsertBenchmarkInputSetup(
    @Body() upsertBenchmarkInputSetupDto: UpsertBenchmarkInputSetupDto,
  ): Promise<BenchmarkInputSetup[]> {
    return this.benchmarkSetupsService.upsertBenchmarkInputSetup(
      upsertBenchmarkInputSetupDto,
    );
  }
  @Put('/benchmarkInformation')
  async upsertBenchmarkInformation(
    @Body() upsertBenchmarkInformationDto: UpsertBenchmarkInformationDto,
  ): Promise<BenchmarkInformation> {
    return this.benchmarkSetupsService.upsertBenchmarkInformation(
      upsertBenchmarkInformationDto,
    );
  }

  @Put('/benchmarkMethod')
  async upsertBenchmarkMethod(
    @Body() upsertBenchmarkMethodDto: UpsertBenchmarkMethodDto,
  ): Promise<BenchmarkMethod> {
    return this.benchmarkSetupsService.upsertBenchmarkMethod(
      upsertBenchmarkMethodDto,
    );
  }

  // //update benchmark input in method
  // @Put('/benchmarkMethod')
  // async updateBenchmarkInputInMethod(
  //   @Body() upsertBenchmarkInputInMethodDto: UpsertBenchmarkInputInMethodDto,
  // ): Promise<BenchmarkMethod> {
  //   return this.benchmarkSetupsService.upsertBenchmarkInputInMethod(
  //     upsertBenchmarkInputInMethodDto,
  //   );
  // }

  @Post()
  create(@Body() createBenchmarkSetupDto) {
    return this.benchmarkSetupsService.create(createBenchmarkSetupDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchmarkSetupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBenchmarkSetupDto) {
    return this.benchmarkSetupsService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchmarkSetupsService.remove(+id);
  }
}
