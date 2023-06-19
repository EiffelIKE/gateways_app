import { Container, Flex, Grid, GridItem, Button } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';
import {
  AlertModal,
  GatewayList,
  SectionTitle,
  SkeletonList,
} from '../../components';
import launch from '../../assets/Home/launcher.png';
import { useHome } from './hooks/useHome';

const Home = () => {
  const {
    isOpen,
    gateways,
    isLoading,
    isError,
    handleDelete,
    handleDetails,
    handleOpen,
    onClose,
    getAllGateways,
    onAdd,
    onEdit,
  } = useHome();

  return (
    <main>
      <section>
        <Container
          my="28"
          maxWidth={{ base: '98%', sm: '80%', md: '700px', lg: '900px' }}
        >
          <Grid gridGap={5} width="full">
            <SectionTitle
              image={launch}
              firstText="Gateways"
              blueText="to space!"
            />
            <GridItem>
              <Flex gap={2} alignItems="center" justifyContent="center">
                <Button
                  fontSize={18}
                  leftIcon={<FaPlus />}
                  aria-label="Add Gateway"
                  variant="ghost"
                  onClick={() => onAdd()}
                >
                  Add Gateway
                </Button>
              </Flex>
            </GridItem>
            <GridItem display="grid" alignContent="center">
              {!isLoading && !isError && (
                <GatewayList
                  data={gateways}
                  onDetails={(gateway) => handleDetails(gateway)}
                  onDeleteModal={(id) => handleOpen(id)}
                  onEdit={(gateway) => onEdit(gateway)}
                />
              )}
              {isLoading && <SkeletonList />}
              {isError && (
                <Button
                  fontSize={18}
                  leftIcon={<FiRefreshCw />}
                  aria-label="Add Gateway"
                  variant="unstyled"
                  alignItems="center"
                  onClick={() => getAllGateways()}
                >
                  Try Gateways again...
                </Button>
              )}
            </GridItem>
          </Grid>
        </Container>
      </section>
      {isOpen && (
        <AlertModal
          isOpen={isOpen}
          onClose={onClose}
          onConfirm={handleDelete}
          action="Delete Gateway"
          confirmText="OK"
          alert="Are you sure? You can't undo this action afterwards."
        />
      )}
    </main>
  );
};

export default Home;
