import { Routes, Route } from 'react-router-dom';
import { JobsPage } from './pages/JobsPage/JobsPage';
import { VacancyPage } from './pages/VacancyPage/VacancyPage';
import { NotFound } from './pages/NotFound/NotFound';
import '@mantine/core/styles.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobsPage />} />
      <Route path="/vacancies/moscow" element={<JobsPage />} />
      <Route path="/vacancies/petersburg" element={<JobsPage />} />
      <Route path="/vacancies/:id" element={<VacancyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;