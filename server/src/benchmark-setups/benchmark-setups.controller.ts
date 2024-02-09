import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenchmarkSetupsService } from './benchmark-setups.service';
import { CreateBenchmarkSetupDto } from './dto/create-benchmark-setup.dto';
import { UpdateBenchmarkSetupDto } from './dto/update-benchmark-setup.dto';

@Controller('benchmark-setups')
export class BenchmarkSetupsController {
  constructor(private readonly benchmarkSetupsService: BenchmarkSetupsService) {}

  @Post()
  create(@Body() createBenchmarkSetupDto: CreateBenchmarkSetupDto) {
    return this.benchmarkSetupsService.create(createBenchmarkSetupDto);
  }

  @Get()
  findAll() {
    return this.benchmarkSetupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchmarkSetupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBenchmarkSetupDto: UpdateBenchmarkSetupDto) {
    return this.benchmarkSetupsService.update(+id, updateBenchmarkSetupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchmarkSetupsService.remove(+id);
  }
}
