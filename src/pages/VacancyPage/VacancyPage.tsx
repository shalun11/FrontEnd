import { useParams, Link } from 'react-router-dom';
import { Container, Title, Text, Badge, Stack, Group, Button, Loader, Alert } from '@mantine/core';
import { useGetJobByIdQuery } from '../../shared/api/jobsApi';

export function VacancyPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetJobByIdQuery(Number(id));

  if (isLoading) {
    return (
      <Container size="md" py="xl">
        <Loader />
      </Container>
    );
  }

  if (isError || !data) {
    return (
      <Container size="md" py="xl">
        <Alert color="red" title="Ошибка">
          Не удалось загрузить вакансию
        </Alert>
      </Container>
    );
  }

  const job = data.job;

  const getSpaceBadge = (space: string) => {
    const labels: Record<string, string> = {
      office: 'ОФИС',
      remote: 'МОЖНО УДАЛЁННО',
      hybrid: 'ГИБРИД',
    };
    return labels[space] || space;
  };

  return (
    <Container size="md" py="xl">
      <Stack gap="md">
        <Title order={2}>{job.name}</Title>

        <Group gap="sm">
          <Text fz="lg" fw={500}>
            {job.salary} ₽
          </Text>
          <Text fz="md" c="dimmed">
            {job.experience}
          </Text>
        </Group>

        <Text fz="md" c="dimmed">
          {job.company_name}
        </Text>

        <Group gap="xs">
          <Badge size="sm" color="blue" variant="light">
            {getSpaceBadge(job.space)}
          </Badge>
        </Group>

        <Text fz="md" c="dimmed">
          {job.city}
        </Text>

        <Title order={4} mt="md">Описание вакансии</Title>
        <Text>{job.description}</Text>

        <Title order={4} mt="md">О компании</Title>
        <Text>{job.about_company}</Text>

        <Button component={Link} to="/vacancies" variant="light" mt="md">
          Назад к списку вакансий
        </Button>
      </Stack>
    </Container>
  );
}