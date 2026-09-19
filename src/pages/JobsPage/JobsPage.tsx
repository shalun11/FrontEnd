import { useSearchParams } from 'react-router-dom';
import { Container, Title, Grid } from '@mantine/core';
import { Header } from '../../widgets/Header/Header';
import { JobList } from '../../widgets/JobList/JobList';
import { JobFilters } from '../../features/filters/JobFilters';

const DEFAULT_SKILLS = ['JavaScript', 'React', 'Redux', 'Python'];

export function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') || '';
  const city = searchParams.get('city') || 'Все';
  const skillsParam = searchParams.get('skills');
  const skills = skillsParam ? skillsParam.split(',') : DEFAULT_SKILLS;
  const page = Number(searchParams.get('page')) || 1;

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

  const handleCityChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== 'Все') {
      params.set('city', value);
    } else {
      params.delete('city');
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
    <>
      <Header
        search={search}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      <Container size="xl" py="xl">
        <Title order={2} mb="xl">
          Список вакансий по профессии Frontend-разработчик
        </Title>
        <Grid>
          <Grid.Col span={3}>
            <JobFilters
              onCityChange={handleCityChange}
              onSkillsChange={handleSkillsChange}
              currentCity={city}
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
    </>
  );
}