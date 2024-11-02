import { dripShopApi } from './apiSlice.ts';

// extras
import { IProduct } from '../components/ProductCard.tsx';

const productApi = dripShopApi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<{ product: IProduct }, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: 'GET',
      }),
    }),
    getProducts: build.query<{ products: IProduct[] }, string>({
      query: (searchQuery) => ({
        url: `/products?search=${searchQuery}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = productApi;
