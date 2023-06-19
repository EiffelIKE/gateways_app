import { useState, useEffect } from 'react';
import { useFeedToast } from './useFeedToast';
import { useDeleteGatewayMutation } from '../../store/slices/useDeleteSlice';

export const useDeleteGateway = () => {
  const [id, setDeleteId] = useState<string>('');
  const showToast = useFeedToast();
  const [deleteGateway, { isSuccess, isLoading, isError }] =
    useDeleteGatewayMutation();

  const updateDelId = (gatewayId: string) => {
    setDeleteId(gatewayId);
  };

  const confirmDelete = () => {
    deleteGateway(id);
  };

  useEffect(() => {
    if (isSuccess) {
      showToast({
        title: 'Deleted',
        description: 'The gateway was deleted',
      });
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

  return { updateDelId, confirmDelete, isDeleted: isSuccess && !isLoading };
};
