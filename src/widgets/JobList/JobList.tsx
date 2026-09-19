import { Stack, Pagination } from '@mantine/core';
import { useGetJobsQuery } from '../../shared/api/jobsApi';
import { JobCard } from './JobCard';

interface JobListProps {
  search: string;
  city: string;
  skills: string[];
  page: number;
  onPageChange: (page: number) => void;
}

export function JobList({ search, city, skills, page, onPageChange }: JobListProps) {
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
      {data?.jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}

      {data && (
        <Pagination
          value={page}
          onChange={onPageChange}
          total={data.pagination.totalPages}
          mt="md"
        />
      )}
    </Stack>
  );
}