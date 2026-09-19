export interface Job {
  id: number;
  company_name: string;
  name: string;
  city: string;
  salary: string;
  published_at: string;
  short_description: string;
  description: string;
  about_company: string;
  space: 'office' | 'remote' | 'hybrid';
  skills: string;
  experience: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface JobsResponse {
  success: boolean;
  pagination: Pagination;
  jobs: Job[];
}

export interface JobResponse {
  success: boolean;
  job: Job;
}

export interface JobsQueryParams {
  search?: string;
  city?: string;
  skills?: string;
  page?: number;
}