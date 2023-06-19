import { apiSlice } from '../api/apiSlice';

export const useEditGateway = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    editGateway: builder.mutation({
      query: ({ body, id }) => ({
        url: `/gateways/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const { useEditGatewayMutation } = useEditGateway;
