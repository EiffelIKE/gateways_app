import { apiSlice } from '../api/apiSlice';

export const useCreategateway = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createGateway: builder.mutation({
      query: (body) => ({
        url: '/gateways',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCreateGatewayMutation } = useCreategateway;
