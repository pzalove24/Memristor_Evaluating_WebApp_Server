import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenchmarkReviewsService } from './benchmark-reviews.service';
import { CreateBenchmarkReviewDto } from './dto/create-benchmark-review.dto';
import { UpdateBenchmarkReviewDto } from './dto/update-benchmark-review.dto';

@Controller('benchmark-reviews')
export class BenchmarkReviewsController {
  constructor(private readonly benchmarkReviewsService: BenchmarkReviewsService) {}

  @Post()
  create(@Body() createBenchmarkReviewDto: CreateBenchmarkReviewDto) {
    return this.benchmarkReviewsService.create(createBenchmarkReviewDto);
  }

  @Get()
  findAll() {
    return this.benchmarkReviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchmarkReviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBenchmarkReviewDto: UpdateBenchmarkReviewDto) {
    return this.benchmarkReviewsService.update(+id, updateBenchmarkReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchmarkReviewsService.remove(+id);
  }
}
