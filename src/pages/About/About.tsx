import { Container, Title, Text, Stack } from '@mantine/core';

export function About() {
  return (
    <Container size="md" py="xl">
      <Stack gap="md">
        <Title order={2}>Обо мне</Title>
        <Text>
          Привет! Я Frontend-разработчик с опытом работы в создании современных веб-приложений.
        </Text>
        <Text>
          <strong>Навыки:</strong> React, TypeScript, Redux, Mantine UI
        </Text>
        <Text>
          <strong>Опыт:</strong> Разработка SPA приложений, работа с API, адаптивная вёрстка
        </Text>
        <Text>
          Люблю решать интересные задачи и постоянно учусь новому!
        </Text>
      </Stack>
    </Container>
  );
}