import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import type { GatewayInfoProps } from './types';

export const GatewayInfo: FC<GatewayInfoProps> = ({ infoKey, info }) => {
  return (
    <Flex gap={2} py="2" flexDirection={{ base: 'column', sm: 'row' }}>
      <Text fontSize={18} fontWeight={700}>
        {infoKey}
      </Text>
      <Text fontSize={18}>{info}</Text>
    </Flex>
  );
};
