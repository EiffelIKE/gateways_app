/* eslint-disable react/jsx-props-no-spreading */
import { Container } from '@chakra-ui/react';
import { SectionTitle, GatewayForm } from '../../components';
import { IGateway } from '../../utils/schemas/GatewaySchema';
import { useNewGateway } from '../../utils/hooks';

const AddGateway = () => {
  const { isLoading, createNewGateway, goHome } = useNewGateway();

  const onSubmit = (data: IGateway) => {
    createNewGateway(data);
  };

  return (
    <section>
      <Container
        my="28"
        maxWidth={{ base: '98%', sm: '80%', md: '700px', lg: '600px' }}
      >
        <SectionTitle firstText="Add a" blueText="Gateway" />
        <GatewayForm
          goHome={goHome}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </Container>
    </section>
  );
};
export default AddGateway;
