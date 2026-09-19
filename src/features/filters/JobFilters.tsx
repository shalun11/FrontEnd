import { useState } from 'react';
import { Tabs, Pill, ActionIcon, Stack, Text, TextInput, Group } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface JobFiltersProps {
  onSkillsChange: (skills: string[]) => void;
  currentSkills?: string[];
}

export function JobFilters({
  onSkillsChange,
  currentSkills = []
}: JobFiltersProps) {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<string[]>(currentSkills);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      const updatedSkills = [...skills, newSkill.trim()];
      setSkills(updatedSkills);
      onSkillsChange(updatedSkills);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    const updatedSkills = skills.filter(skill => skill !== skillToRemove);
    setSkills(updatedSkills);
    onSkillsChange(updatedSkills);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleTabChange = (city: string | null) => {
    if (city === 'moscow') {
      navigate('/vacancies/moscow');
    } else if (city === 'petersburg') {
      navigate('/vacancies/petersburg');
    }
  };

  const getActiveTab = () => {
    if (location.pathname.includes('moscow')) return 'moscow';
    if (location.pathname.includes('petersburg')) return 'petersburg';
    return null;
  };

  return (
    <Stack gap="md">
      <div>
        <Text fz="sm" fw={500} mb="xs">Ключевые навыки</Text>
        <Group gap="xs" mb="xs">
          {skills.map((skill) => (
            <Pill key={skill} withRemoveButton onRemove={() => handleRemoveSkill(skill)}>
              {skill}
            </Pill>
          ))}
        </Group>
        <Group gap="xs">
          <TextInput
            placeholder="Навык"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ flex: 1 }}
            size="sm"
          />
          <ActionIcon
            color="blue"
            onClick={handleAddSkill}
            size="sm"
          >
            <IconPlus size={16} />
          </ActionIcon>
        </Group>
      </div>

      <Tabs value={getActiveTab()} onChange={handleTabChange}>
        <Tabs.List>
          <Tabs.Tab value="moscow">Москва</Tabs.Tab>
          <Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Stack>
  );
}