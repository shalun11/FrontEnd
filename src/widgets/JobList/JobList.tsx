import { useState } from 'react';
import { Stack, Pagination } from '@mantine/core';
import { useGetJobsQuery } from '../../shared/api/jobsApi';
import { JobCard } from './JobCard';

interface JobListProps {
  search: string;
  city: string;
  skills: string[];
}

export function JobList({ search, city, skills }: JobListProps) {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetJobsQuery({
    page,
    search,
    city,
    skills: skills.join(','),
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <Stack gap="md" style={{ maxWidth: 600 }}>
      {/* Список вакансий */}
      {data?.jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}

      {/* Пагинация */}
      {data && (
        <Pagination
          value={page}
          onChange={setPage}
          total={data.pagination.totalPages}
          mt="md"
        />
      )}
    </Stack>
  );
}