import { Container, Title, Text, Button, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <Container size="md" py="xl">
      <Stack align="center" gap="md">
        <Title order={1}>404</Title>
        <Text size="xl" c="dimmed">
          Страница не найдена
        </Text>
        <Text c="dimmed">
          К сожалению, запрашиваемая страница не существует.
        </Text>
        <Button component={Link} to="/" color="blue" mt="md">
          Вернуться на главную
        </Button>
      </Stack>
    </Container>
  );
}