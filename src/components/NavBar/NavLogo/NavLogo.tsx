import { FC } from 'react';
import { Box, IconButton, Text } from '@chakra-ui/react';
import { IoIosRocket } from 'react-icons/io';
import type { NavLogoProps } from './types';
import { useGoHome } from '../../../utils/hooks';

export const NavLogo: FC<NavLogoProps> = ({ colorScheme, logoTitle }) => {
  const goHome = useGoHome();
  return (
    <Box display="flex" alignItems="center" gap={4}>
      <IconButton
        colorScheme={colorScheme}
        aria-label="Logo App"
        fontSize={28}
        icon={<IoIosRocket />}
        onClick={() => goHome()}
      />
      <Text fontWeight={800} fontSize={32}>
        {logoTitle}
      </Text>
    </Box>
  );
};
