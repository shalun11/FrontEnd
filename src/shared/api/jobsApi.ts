import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { JobsResponse, JobsQueryParams, JobResponse } from '../types/job';

const BASE_URL = 'https://kata-jobs.onrender.com/api/jobs';

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Jobs'],
  endpoints: (builder) => ({
    getJobs: builder.query<JobsResponse, JobsQueryParams>({
      query: (params) => {
        const queryParams = new URLSearchParams();
        
        if (params.search) queryParams.append('search', params.search);
        if (params.city && params.city !== 'Все') queryParams.append('city', params.city);
        if (params.skills) queryParams.append('skills', params.skills);
        if (params.page) queryParams.append('page', params.page.toString());
        
        return `?${queryParams.toString()}`;
      },
      providesTags: ['Jobs'],
    }),
    getJobById: builder.query<JobResponse, number>({
      query: (id) => `/${id}`,
      providesTags: ['Jobs'],
    }),
  }),
});

export const { useGetJobsQuery, useGetJobByIdQuery } = jobsApi;