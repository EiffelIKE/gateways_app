/* eslint-disable no-underscore-dangle */
import { FC } from 'react';
import { Stack, Text, Flex } from '@chakra-ui/react';
import { GatewayCard } from './GatewayCard';
import type { GatewayListProps } from './types';

export const GatewayList: FC<GatewayListProps> = ({
  data,
  onDetails,
  onDeleteModal,
  onEdit,
}) => {
  return (
    <Stack
      spacing={8}
      direction="row"
      wrap="wrap"
      alignContent="center"
      justifyContent={{ base: 'center', sm: 'center', md: 'flex-start' }}
    >
      {data.length > 0 ? (
        data.map((gateway, index) => {
          return (
            <GatewayCard
              key={gateway._id}
              name={gateway.name}
              ipv4={gateway.ipv4}
              serialNumber={gateway.serialNumber}
              devices={gateway.devices}
              index={index}
              onDetails={() => onDetails(gateway)}
              onDelete={() => onDeleteModal(gateway._id)}
              onEdit={() => onEdit(gateway)}
            />
          );
        })
      ) : (
        <Flex justifyContent="center" width="100%" alignContent="center">
          <Text alignSelf="center">No gateways here...</Text>
        </Flex>
      )}
    </Stack>
  );
};
