import { FC } from 'react';
import { Flex, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

import type { ThemeButtonProps } from './types';

export const ThemeButton: FC<ThemeButtonProps> = ({
  toggleColorMode,
  colorMode,
  showTheme,
}) => {
  const iconColor = useColorModeValue('yellow.500', 'white');

  return (
    <Flex alignItems="center" gap={4}>
      <IconButton
        color={iconColor}
        fontSize={24}
        onClick={toggleColorMode}
        aria-label="Theme Switch"
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
      />
      {showTheme && (
        <Text onClick={toggleColorMode} fontSize={20} fontWeight={600}>{`${
          colorMode === 'light' ? 'Light' : 'Dark'
        } Mode`}</Text>
      )}
    </Flex>
  );
};
