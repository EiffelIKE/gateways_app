import { useEffect } from 'react';
import { useFeedToast } from './useFeedToast';
import { useCreateGatewayMutation } from '../../store/slices/useCreategateway';
import { IGateway } from '../schemas/GatewaySchema';
import { useGoHome } from './useGoHome';

export const useNewGateway = () => {
  const showToast = useFeedToast();
  const goHome = useGoHome();
  const [createGateway, { isSuccess, isLoading, isError }] =
    useCreateGatewayMutation();

  const createNewGateway = (body: IGateway) => {
    createGateway(body);
  };

  useEffect(() => {
    if (isSuccess) {
      showToast({
        title: 'Created',
        description: 'The gateway was created',
      });
      goHome();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      showToast({
        title: 'Ups!',
        description: 'Something went wrong, try later',
        status: 'error',
      });
    }
  }, [isError]);

  return { createNewGateway, isLoading, goHome };
};
