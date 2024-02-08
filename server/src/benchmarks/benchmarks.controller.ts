import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenchmarksService } from './benchmarks.service';
import { CreateBenchmarkDto } from './dto/create-benchmark.dto';
import { UpdateBenchmarkDto } from './dto/update-benchmark.dto';

@Controller('benchmarks')
export class BenchmarksController {
  constructor(private readonly benchmarksService: BenchmarksService) {}

  @Post()
  create(@Body() createBenchmarkDto: CreateBenchmarkDto) {
    return this.benchmarksService.create(createBenchmarkDto);
  }

  @Get()
  findAll() {
    return this.benchmarksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchmarksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBenchmarkDto: UpdateBenchmarkDto) {
    return this.benchmarksService.update(+id, updateBenchmarkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchmarksService.remove(+id);
  }
}
