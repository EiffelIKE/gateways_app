import { FC } from 'react';
import {
  Flex,
  Grid,
  Text,
  useColorModeValue,
  GridItem,
} from '@chakra-ui/react';

import { RocketImg } from './styles';
import type { SectionTitleProps } from './types';

export const SectionTitle: FC<SectionTitleProps> = ({
  image,
  firstText,
  blueText,
}) => {
  const blueHeading = useColorModeValue('blue.500', 'blue.200');
  return (
    <Grid gridGap={5} width="full">
      <GridItem>
        <Flex
          flexDirection="column"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          {!!image && <RocketImg src={image} alt="Rocket Launch" />}
          <Flex fontSize="3xl" gap={2} wrap="wrap" justifyContent="center">
            {!!firstText && <Text>{firstText}</Text>}
            {!!blueText && <Text color={blueHeading}>{blueText}</Text>}
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};
