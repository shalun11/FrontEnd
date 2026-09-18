import { Container, Group, Text, Anchor, TextInput, Button } from '@mantine/core';

interface HeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
}

export function Header({ search, onSearchChange, onSearchSubmit }: HeaderProps) {
  return (
    <div style={{
      height: 60,
      background: 'white',
      borderBottom: '1px solid #e9ecef',
      padding: '0 20px'
    }}>
      <Container size="xl" h="100%">
        <Group justify="space-between" h="100%">
          {/* Логотип */}
          <Group gap="xs">
            <div style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: '#D32F2F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: 14
            }}>
              hh
            </div>
            <Text fz="lg" fw={700} c="dark">
              .FrontEnd
            </Text>
          </Group>

          {/* Меню + Поиск */}
          <Group gap="xl">
            <Anchor
              href="/"
              c="dark"
              fz="sm"
              fw={500}
              style={{ textDecoration: 'none' }}
            >
              Вакансии FE
            </Anchor>
            <Anchor
              href="/about"
              c="dimmed"
              fz="sm"
              fw={500}
              style={{ textDecoration: 'none' }}
            >
              Обо мне
            </Anchor>
            <Group gap="xs">
              <TextInput
                placeholder="Должность или название компании"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearchSubmit()}
                style={{ width: 250 }}
                size="sm"
              />
              <Button
                size="sm"
                color="blue"
                onClick={onSearchSubmit}
              >
                Найти
              </Button>
            </Group>
          </Group>
        </Group>
      </Container>
    </div>
  );
}