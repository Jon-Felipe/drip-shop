import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// extras
import { IUser } from '../utils/types';

export const dripShopApi = createApi({
  reducerPath: 'dripShopApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: (builder) => ({
    register: builder.mutation<string, Partial<IUser>>({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterMutation } = dripShopApi;
