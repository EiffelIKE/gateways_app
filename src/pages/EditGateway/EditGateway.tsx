/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { Container } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectDetails } from '../../store/slices/detailSlice';
import { SectionTitle, GatewayForm } from '../../components';
import { IGateway } from '../../utils/schemas/GatewaySchema';
import { useUptdateGateway } from '../../utils/hooks';

const EditGateway = () => {
  const { isLoading, onEdit, goHome } = useUptdateGateway();
  const location = useLocation();
  const gateway = useSelector(selectDetails);
  const { _id, ...rest } = gateway;
  const onSubmit = (data: IGateway) => {
    onEdit(_id, data);
  };

  if (!_id) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <section>
      <Container
        my="28"
        maxWidth={{ base: '98%', sm: '80%', md: '700px', lg: '600px' }}
      >
        <SectionTitle firstText="Edit this" blueText="Gateway" />
        <GatewayForm
          goHome={goHome}
          onSubmit={onSubmit}
          isLoading={isLoading}
          defaultValues={rest}
        />
      </Container>
    </section>
  );
};
export default EditGateway;
