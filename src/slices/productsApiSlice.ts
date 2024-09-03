import { dripShopApi } from './apiSlice.ts';

// extras
import { IProduct } from '../utils/types.ts';

const productApi = dripShopApi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<{ product: IProduct }, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetProductQuery } = productApi;
