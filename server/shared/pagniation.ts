export type TPaginationResponse<T> = {
  rows: T[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
};
