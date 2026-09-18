import { useState } from 'react';
import { Select, Group, Pill, ActionIcon, Stack, Text, TextInput } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

interface JobFiltersProps {
  onCityChange: (value: string) => void;
  onSkillsChange: (skills: string[]) => void;
  currentCity?: string;
  currentSkills?: string[];
}

export function JobFilters({
  onCityChange,
  onSkillsChange,
  currentCity = 'Все',
  currentSkills = []
}: JobFiltersProps) {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<string[]>(currentSkills);

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

  return (
    <Stack gap="md">
      {/* Ключевые навыки */}
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

      {/* Город */}
      <Select
        placeholder="Все города"
        data={['Все', 'Москва', 'Санкт-Петербург']}
        value={currentCity}
        onChange={(value) => onCityChange(value || 'Все')}
        size="sm"
      />
    </Stack>
  );
}