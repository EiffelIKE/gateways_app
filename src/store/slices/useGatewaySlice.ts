import { apiSlice } from '../api/apiSlice';

export const useGatewaySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGateways: builder.query({
      query: () => '/gateways/list',
    }),
  }),
});

export const { useLazyGetGatewaysQuery } = useGatewaySlice;
