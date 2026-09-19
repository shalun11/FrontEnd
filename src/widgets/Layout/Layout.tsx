import { Outlet, NavLink } from 'react-router-dom';
import { Container, Group, Text } from '@mantine/core';
import { Header } from '../Header/Header';

export function Layout() {
  return (
    <>
      <div style={{
        height: 60,
        background: 'white',
        borderBottom: '1px solid #e9ecef',
        padding: '0 20px'
      }}>
        <Container size="xl" h="100%">
          <Group justify="space-between" h="100%">
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

            <Group gap="xl">
              <NavLink
                to="/vacancies"
                style={({ isActive }) => ({
                  color: isActive ? '#4263EB' : undefined,
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: 'none',
                  fontSize: '14px'
                })}
              >
                Вакансии FE
              </NavLink>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? '#4263EB' : undefined,
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: 'none',
                  fontSize: '14px'
                })}
              >
                Обо мне
              </NavLink>
            </Group>
          </Group>
        </Container>
      </div>
      <Outlet />
    </>
  );
}