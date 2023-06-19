import { FC } from 'react';
import { Stack } from '@chakra-ui/react';
import { NavLink } from '../NavLink';

import { navbarLinks } from '../../../utils/const';
import type { NavButtonsProps } from './types';

export const NavButtons: FC<NavButtonsProps> = ({ moreThanMd, children }) => {
  return (
    <Stack direction={`${moreThanMd ? 'row' : 'column'}`} spacing={6}>
      {navbarLinks.map((link) => {
        return (
          <NavLink
            key={link.aria}
            aria={link.aria}
            href={link.href}
            icon={link.icon}
            description={!moreThanMd ? link.description : ''}
          />
        );
      })}
      {children}
    </Stack>
  );
};
