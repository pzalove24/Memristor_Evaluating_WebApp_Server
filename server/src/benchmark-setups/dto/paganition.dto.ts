export class PaginationResponseDto<T> {
  rows: T[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
