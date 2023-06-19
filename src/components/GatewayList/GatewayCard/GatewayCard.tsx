import {
  Button,
  CardBody,
  CardFooter,
  Heading,
  useBreakpointValue,
  ResponsiveValue,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FaTrash, FaRegEdit } from 'react-icons/fa';
import { CardContainer } from './CardContainer';
import { GatewayInfo } from '../GatewayInfo';
import { DeleteContainer } from './styles';

import { GatewayCardProps, FlexDirection } from './types';

export const GatewayCard: FC<GatewayCardProps> = ({
  serialNumber,
  ipv4,
  devices,
  name,
  onDetails,
  onEdit,
  onDelete,
}) => {
  const flexButtons: ResponsiveValue<FlexDirection> | undefined =
    useBreakpointValue({
      base: 'column',
      md: 'row',
    });
  return (
    <CardContainer>
      <CardBody padding="10px 20px 0">
        <Flex width="100%" justifyContent="space-between">
          <Heading marginBottom={2} size="md" paddingTop={2}>
            {name}
          </Heading>
          <IconButton
            fontSize={18}
            aria-label="Detail Gateway"
            icon={<FaRegEdit />}
            variant="ghost"
            onClick={() => onEdit()}
          />
        </Flex>
        <GatewayInfo infoKey="IPv4:" info={ipv4} />
        <GatewayInfo infoKey="Serial:" info={serialNumber} />
        <GatewayInfo infoKey="Devices:" info={`${devices.length}`} />
      </CardBody>

      <CardFooter
        justifyContent="space-between"
        width="100%"
        flexDirection={flexButtons}
        gap="1.25rem"
      >
        <Button
          variant="solid"
          width={{ base: '100%', md: 'auto' }}
          colorScheme="blue"
          onClick={onDetails}
          paddingTop={0}
        >
          Details...
        </Button>
        <Button
          variant="solid"
          width={{ base: '100%', md: 'auto' }}
          colorScheme="red"
          onClick={onDelete}
          paddingTop={0}
        >
          <DeleteContainer>
            <FaTrash size={20} />
            Delete
          </DeleteContainer>
        </Button>
      </CardFooter>
    </CardContainer>
  );
};
