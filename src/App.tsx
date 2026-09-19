import { Routes, Route } from 'react-router-dom';
import { Layout } from './widgets/Layout/Layout';
import { JobsPage } from './pages/JobsPage/JobsPage';
import { About } from './pages/About/About';
import { VacancyPage } from './pages/VacancyPage/VacancyPage';
import { NotFound } from './pages/NotFound/NotFound';
import '@mantine/core/styles.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<JobsPage />} />
        <Route path="vacancies" element={<JobsPage />} />
        <Route path="vacancies/moscow" element={<JobsPage />} />
        <Route path="vacancies/petersburg" element={<JobsPage />} />
        <Route path="vacancies/:id" element={<VacancyPage />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;