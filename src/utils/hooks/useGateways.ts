import { useEffect, useState } from 'react';
import { useLazyGetGatewaysQuery } from '../../store/slices/useGatewaySlice';

import type { GatewayWithId } from '../schemas/GatewaySchema';
import { useFeedToast } from './useFeedToast';

export const useGateways = () => {
  const [gateways, setGateways] = useState<Array<GatewayWithId>>([]);
  const showToast = useFeedToast();
  const [getGateways, { data, isSuccess, isLoading, isError }] =
    useLazyGetGatewaysQuery();

  const getAllGateways = () => {
    getGateways({});
  };

  useEffect(() => {
    getAllGateways();
  }, []);

  useEffect(() => {
    if (data && isSuccess) {
      setGateways(data);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (isError) {
      showToast({
        title: 'Ups!',
        description: 'Something went wrong with the server, try later',
        status: 'error',
      });
    }
  }, [isError]);

  return { gateways, isLoading, isError, getAllGateways };
};
