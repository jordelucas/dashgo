import { Stack } from '@chakra-ui/react';
import {
  RiGitMergeLine,
  RiContactsLine,
  RiDashboardLine,
  RiInputMethodLine,
} from 'react-icons/ri';

import { NavSection } from './NavSection';
import { NavLink } from './NavLink';

export function SidebarNav() {
  return (
    <Stack spacing='12' alignItems='flex-start'>
      <NavSection title='GERAL'>
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Usuários</NavLink>
      </NavSection>

      <NavSection title='AUTOMAÇÃO'>
        <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink icon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>
    </Stack>
  )
}