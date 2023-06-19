import { ColorMode } from '@chakra-ui/react';

export interface ThemeButtonProps {
  toggleColorMode: () => void;
  colorMode: ColorMode;
  showTheme?: boolean;
}
