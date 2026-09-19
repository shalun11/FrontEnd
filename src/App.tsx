import { Routes, Route } from 'react-router-dom';
import { JobsPage } from './pages/JobsPage/JobsPage';
import { VacancyPage } from './pages/VacancyPage/VacancyPage';
import '@mantine/core/styles.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobsPage />} />
      <Route path="/vacancies/:id" element={<VacancyPage />} />
    </Routes>
  );
}

export default App;