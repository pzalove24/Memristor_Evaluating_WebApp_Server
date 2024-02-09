import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BenchmarkSetupsService } from './benchmark-setups.service';
import { ListAllBenchmarkSetupsDto } from './dto/listAllBenchmarkSetups.dto';

@Controller('benchmark-setups')
export class BenchmarkSetupsController {
  constructor(
    private readonly benchmarkSetupsService: BenchmarkSetupsService,
  ) {}

  @Get()
  listAllBenchmarkSetups(
    @Query() listAllBenchmarkSetupsDto: ListAllBenchmarkSetupsDto,
  ) {
    return this.benchmarkSetupsService.listAllBenchmarkSetups(
      listAllBenchmarkSetupsDto,
    );
  }

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
