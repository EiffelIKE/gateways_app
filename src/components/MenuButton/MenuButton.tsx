import { FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

import type { MenuButtonProps } from './types';

export const MenuButton: FC<MenuButtonProps> = ({ onOpen }) => {
  return (
    <IconButton
      size="lg"
      fontSize={28}
      onClick={onOpen}
      aria-label="Menu"
      icon={<FaBars />}
    />
  );
};
