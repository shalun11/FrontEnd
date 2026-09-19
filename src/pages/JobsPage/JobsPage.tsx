import { useSearchParams, useLocation } from 'react-router-dom';
import { Container, Title, Grid, TextInput, Button, Group } from '@mantine/core';
import { JobList } from '../../widgets/JobList/JobList';
import { JobFilters } from '../../features/filters/JobFilters';

const DEFAULT_SKILLS = ['JavaScript', 'React', 'Redux', 'Python'];

export function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const search = searchParams.get('search') || '';
  const skillsParam = searchParams.get('skills');
  const skills = skillsParam ? skillsParam.split(',') : DEFAULT_SKILLS;
  const page = Number(searchParams.get('page')) || 1;

  const getCityFromPath = () => {
    if (location.pathname.includes('moscow')) return 'Москва';
    if (location.pathname.includes('petersburg')) return 'Санкт-Петербург';
    return 'Все';
  };

  const city = getCityFromPath();

  const handleSearchChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    setSearchParams(params);
  };

  const handleSearchSubmit = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    params.set('page', '1');
    setSearchParams(params);
  };

  const handleSkillsChange = (newSkills: string[]) => {
    const params = new URLSearchParams(searchParams);
    if (newSkills.length > 0) {
      params.set('skills', newSkills.join(','));
    } else {
      params.delete('skills');
    }
    params.set('page', '1');
    setSearchParams(params);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    setSearchParams(params);
  };

  return (
    <Container size="xl" py="xl">
      <Group gap="xs" mb="xl" justify="flex-end">
        <TextInput
          placeholder="Должность или название компании"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit(search)}
          style={{ width: 300 }}
          size="sm"
        />
        <Button
          size="sm"
          color="blue"
          onClick={() => handleSearchSubmit(search)}
        >
          Найти
        </Button>
      </Group>

      <Title order={2} mb="xl">
        Список вакансий по профессии Frontend-разработчик
      </Title>
      <Grid>
        <Grid.Col span={3}>
          <JobFilters
            onSkillsChange={handleSkillsChange}
            currentSkills={skills}
          />
        </Grid.Col>
        <Grid.Col span={9}>
          <JobList
            search={search}
            city={city}
            skills={skills}
            page={page}
            onPageChange={handlePageChange}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}