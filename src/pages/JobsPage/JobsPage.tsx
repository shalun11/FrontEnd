import { useState } from 'react';
import { Container, Grid, Title } from '@mantine/core';
import { Header } from '../../widgets/Header/Header';
import { JobFilters } from '../../features/filters/JobFilters';
import { JobList } from '../../widgets/JobList/JobList';

export function JobsPage() {
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [city, setCity] = useState('Все');
  const [skills, setSkills] = useState<string[]>(['JavaScript', 'React', 'Redux', 'Python']);

  return (
    <>
      <Header
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={() => setAppliedSearch(search)}
      />
      <Container size="xl" py="xl">
        <Title order={2} mb="xl">
          Список вакансий по профессии Frontend-разработчик
        </Title>
        <Grid>
          {/* Левая колонка - фильтры */}
          <Grid.Col span={3}>
            <JobFilters
              onCityChange={setCity}
              onSkillsChange={setSkills}
              currentCity={city}
              currentSkills={skills}
            />
          </Grid.Col>

          {/* Правая колонка - список вакансий */}
          <Grid.Col span={9}>
            <JobList search={appliedSearch} city={city} skills={skills} />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}