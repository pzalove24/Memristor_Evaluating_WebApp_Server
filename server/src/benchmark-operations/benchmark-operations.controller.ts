import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenchmarkOperationsService } from './benchmark-operations.service';
import { CreateBenchmarkOperationDto } from './dto/create-benchmark-operation.dto';
import { UpdateBenchmarkOperationDto } from './dto/update-benchmark-operation.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('benchmark-operations')
@Controller('benchmark-operations')
export class BenchmarkOperationsController {
  constructor(private readonly benchmarkOperationsService: BenchmarkOperationsService) {}

  @Post()
  create(@Body() createBenchmarkOperationDto: CreateBenchmarkOperationDto) {
    return this.benchmarkOperationsService.create(createBenchmarkOperationDto);
  }

  @Get()
  findAll() {
    return this.benchmarkOperationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchmarkOperationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBenchmarkOperationDto: UpdateBenchmarkOperationDto) {
    return this.benchmarkOperationsService.update(+id, updateBenchmarkOperationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchmarkOperationsService.remove(+id);
  }
}
