import { Injectable } from '@nestjs/common';
import { CreateBenchmarkReviewDto } from './dto/create-benchmark-review.dto';
import { UpdateBenchmarkReviewDto } from './dto/update-benchmark-review.dto';

@Injectable()
export class BenchmarkReviewsService {
  create(createBenchmarkReviewDto: CreateBenchmarkReviewDto) {
    return 'This action adds a new benchmarkReview';
  }

  findAll() {
    return `This action returns all benchmarkReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} benchmarkReview`;
  }

  update(id: number, updateBenchmarkReviewDto: UpdateBenchmarkReviewDto) {
    return `This action updates a #${id} benchmarkReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} benchmarkReview`;
  }
}
