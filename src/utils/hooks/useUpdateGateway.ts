import { useEffect } from 'react';
import { useFeedToast } from './useFeedToast';
import { useEditGatewayMutation } from '../../store/slices/useEditGateway';
import { IGateway } from '../schemas/GatewaySchema';
import { useGoHome } from './useGoHome';

export const useUptdateGateway = () => {
  const showToast = useFeedToast();
  const goHome = useGoHome();
  const [editGateway, { isSuccess, isLoading, isError }] =
    useEditGatewayMutation();

  const onEdit = (id: string, body: IGateway) => {
    editGateway({ id, body });
  };

  useEffect(() => {
    if (isSuccess) {
      showToast({
        title: 'Updated!',
        description: 'The gateway was updated',
      });
      goHome();
    }
  }, [isLoading, isSuccess]);

  useEffect(() => {
    if (isError) {
      showToast({
        title: 'Ups!',
        description: 'Something went wrong, try later',
        status: 'error',
      });
    }
  }, [isError]);

  return { onEdit, isLoading, goHome };
};
