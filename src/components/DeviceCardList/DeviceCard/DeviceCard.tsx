import { Flex, Text, Badge } from '@chakra-ui/react';
import { FC } from 'react';

import { GatewayInfo } from '../../GatewayList/GatewayInfo';

import type { DeviceCardProps } from './types';

export const DeviceCard: FC<DeviceCardProps> = ({ device, index }) => {
  const { status } = device;
  const isOnline = status === 'online';
  return (
    <Flex
      padding={5}
      direction="column"
      border="1px"
      borderRadius={10}
      marginTop={5}
      borderColor="gray.400"
      gap="5px"
    >
      <Text display="flex" width="100%" justifyContent="space-between">
        {`Device ${index}`}:
        <Badge colorScheme={isOnline ? 'green' : 'red'}>{device.status}</Badge>
      </Text>
      <GatewayInfo infoKey="UID:" info={String(device.uid)} />
      <GatewayInfo infoKey="Status:" info={device.status} />

      <GatewayInfo infoKey="Vendor:" info={device.vendor} />
      <GatewayInfo
        infoKey="Date Created:"
        info={new Date(device.created_at || '').toLocaleString()}
      />
    </Flex>
  );
};
