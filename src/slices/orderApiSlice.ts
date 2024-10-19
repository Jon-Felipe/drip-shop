import { IOrder } from '../utils/types.ts';
import { dripShopApi } from './apiSlice.ts';

const orderApi = dripShopApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation<string, IOrder>({
      query: (orderData) => ({
        url: '/orders',
        method: 'POST',
        body: orderData,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
