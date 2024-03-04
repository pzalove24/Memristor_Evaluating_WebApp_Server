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
import {
  FilteredBenchmarkSetupsDto,
  ListAllBenchmarkSetupsDto,
} from './dto/listAllBenchmarkSetups.dto';
import { UpsertBenchmarkInputDto } from './dto/upsertBenchmarkInput.dto';
import {
  BenchmarkInformation,
  BenchmarkInput,
  BenchmarkInputSetup,
  BenchmarkMethod,
  MethodType,
  VoltageType,
} from '@prisma/client';
import { PaginationResponseDto } from './dto/paganition.dto';
import { UpsertBenchmarkInputBenchmarkInputSetupDto } from './dto/upsertBenchmarkInputBenchmarkInputSetup.dto';
import { UpsertBenchmarkInformationDto } from './dto/upsertBenchmarkInformation.dto';
import { UpsertBenchmarkMethodDto } from './dto/upsertBenchmarkMethod.dto';
import { ListAllBenchmarkInputNameDto } from './dto/listAllBenchmarkInputName.dto';
import { ListAllBenchmarkMethodNameDto } from './dto/listAllBenchmarkMethodName.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateBenchmarkInputBenchmarkInputSetupResponseDto } from './dto/createBenchmarkInputBenchmarkInputSetup.dto';

@ApiTags('benchmark-setups')
@Controller('benchmark-setups')
export class BenchmarkSetupsController {
  constructor(
    private readonly benchmarkSetupsService: BenchmarkSetupsService,
  ) {}

  @Post()
  listAllBenchmarkSetups(
    @Query() listAllBenchmarkSetupsDto: ListAllBenchmarkSetupsDto,
    @Body() filteredBenchmarkSetupsDto: FilteredBenchmarkSetupsDto,
  ): Promise<PaginationResponseDto<BenchmarkInput | BenchmarkMethod>> {
    console.log('bodyapi', filteredBenchmarkSetupsDto);
    return this.benchmarkSetupsService.listAllBenchmarkSetups(
      listAllBenchmarkSetupsDto,
      filteredBenchmarkSetupsDto,
    );
  }

  @Get('/voltageType')
  listAllVoltageType(): Promise<VoltageType[]> {
    return this.benchmarkSetupsService.findAllVoltageType();
  }

  @Get('/methodType')
  listAllMethodType(): Promise<MethodType[]> {
    return this.benchmarkSetupsService.findAllMethodType();
  }

  @Get('/benchmarkInputs')
  listAllBenchmarkInputName(
    @Query() queryInputName: ListAllBenchmarkInputNameDto,
  ): Promise<BenchmarkInput[]> {
    return this.benchmarkSetupsService.findAllBenchmarkInputName(
      queryInputName,
    );
  }

  @Get('/benchmarkMethods')
  listAllBenchmarkMethodName(
    @Query() queryMethodName: ListAllBenchmarkMethodNameDto,
  ): Promise<BenchmarkMethod[]> {
    return this.benchmarkSetupsService.findAllBenchmarkMethodName(
      queryMethodName,
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

  @Get('/benchmarkInput/benchmarkInputSetup/:id')
  async createBenchmarkInputBenchmarkInputSetup(
    @Param('id') id: string
  ): Promise<BenchmarkInputSetup> {
    return this.benchmarkSetupsService.createBenchmarkInputBenchmarkInputSetup(id);
  }

  @Put('/benchmarkInput/benchmarkInputSetup')
  async upsertBenchmarkInputBenchmarkInputSetup(
    @Body()
    upsertBenchmarkInputBenchmarkInputSetupDto: UpsertBenchmarkInputBenchmarkInputSetupDto,
  ): Promise<BenchmarkInputSetup[]> {
    return this.benchmarkSetupsService.upsertBenchmarkInputBenchmarkInputSetup(
      upsertBenchmarkInputBenchmarkInputSetupDto,
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
