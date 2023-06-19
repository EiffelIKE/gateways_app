import { apiSlice } from '../api/apiSlice';

export const useDeleteSLcie = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteGateway: builder.mutation({
      query: (id: string) => ({
        url: `/gateways/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useDeleteGatewayMutation } = useDeleteSLcie;
