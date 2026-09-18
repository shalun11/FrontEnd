import { Card, Text, Group, Badge, Button, Stack } from '@mantine/core';
import type { Job } from '../../shared/types/job';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  // Функция для отображения типа занятости
  const getSpaceBadge = (space: string) => {
    const labels: Record<string, string> = {
      office: 'ОФИС',
      remote: 'МОЖНО УДАЛЁННО',
      hybrid: 'ГИБРИД',
    };
    return labels[space] || space;
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder mb="md">
      <Stack gap="xs">
        {/* Название вакансии */}
        <Text fz="lg" fw={600} c="#4263EB">
          {job.name}
        </Text>

        {/* Зарплата и опыт */}
        <Group gap="sm">
          <Text fz="sm" fw={500}>
            {job.salary} ₽
          </Text>
          <Text fz="sm" c="dimmed">
            {job.experience}
          </Text>
        </Group>

        {/* Компания */}
        <Text fz="sm" c="dimmed">
          {job.company_name}
        </Text>

        {/* Теги */}
        <Group gap="xs">
          <Badge
            size="sm"
            color="blue"
            variant="light"
          >
            {getSpaceBadge(job.space)}
          </Badge>
        </Group>

        {/* Город */}
        <Text fz="sm" c="dimmed">
          {job.city}
        </Text>

        {/* Кнопка */}
        <Button
          size="xs"
          color="dark"
          variant="filled"
          mt="xs"
          style={{ width: 'auto', alignSelf: 'flex-start' }}
        >
          Смотреть вакансию
        </Button>
      </Stack>
    </Card>
  );
}