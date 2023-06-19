import { FC } from 'react';
import {
  Card,
  useColorModeValue,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react';
import { Article } from './styles';
import type { CardContainerProps } from './types';

export const CardContainer: FC<CardContainerProps> = ({ children }) => {
  const cardBg = useColorModeValue('gray.200', 'gray.900');
  const cardWidth = useBreakpointValue({
    base: '80%',
    sm: '80%',
    md: '45%',
    lg: '30%',
  });
  return (
    <Article style={{ width: cardWidth }}>
      <Card
        direction={{ base: 'column', md: 'row' }}
        overflow="hidden"
        variant="outline"
        borderRadius={16}
        borderWidth={2}
        backgroundColor={cardBg}
        width="100%"
        height="100%"
        padding="0"
      >
        <Stack width="100%">{children}</Stack>
      </Card>
    </Article>
  );
};
