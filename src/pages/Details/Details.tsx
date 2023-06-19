/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  Container,
  useColorModeValue,
  Card,
  Flex,
  IconButton,
  Text,
  Badge,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { FaHome, FaRegEdit } from 'react-icons/fa';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { selectDetails } from '../../store/slices/detailSlice';
import { DeviceCardList, SectionTitle } from '../../components';
import { GatewayInfo } from '../../components/GatewayList/GatewayInfo';
import { useGoHome } from '../../utils/hooks';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const gateway = useSelector(selectDetails);
  const { _id, ...rest } = gateway;
  const goHome = useGoHome();
  const cardBg = useColorModeValue('gray.200', 'gray.900');

  if (!_id) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <section>
      <Container
        my="28"
        maxWidth={{ base: '100%', sm: '80%', md: '700px', lg: '600px' }}
      >
        <SectionTitle firstText="Gateway:" blueText={gateway.name} />
        <Card padding={8} marginTop={8} backgroundColor={cardBg}>
          <Flex width="100%" justifyContent="flex-end">
            <Flex gap={2}>
              <IconButton
                fontSize={22}
                aria-label="Detail Gateway"
                icon={<FaRegEdit />}
                variant="ghost"
                padding={3}
                onClick={() => navigate('/edit')}
              />
              <IconButton
                fontSize={22}
                colorScheme="blue"
                aria-label="Detail Gateway"
                icon={<FaHome />}
                variant="solid"
                onClick={() => goHome()}
              />
            </Flex>
          </Flex>
          <GatewayInfo infoKey="Name:" info={gateway.name} />
          <GatewayInfo infoKey="IPv4:" info={gateway.ipv4} />
          <GatewayInfo infoKey="Serial Number:" info={gateway.serialNumber} />
          <Text fontSize={20}>Devices:</Text>
          {gateway.devices.length > 0 &&
            DeviceCardList({ devices: gateway.devices })}
        </Card>
      </Container>
    </section>
  );
};

export default Details;
