import { IUser } from '../utils/types.ts';
import { dripShopApi } from './apiSlice.ts';

const userApi = dripShopApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<{ user: IUser }, Partial<IUser>>({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    login: build.mutation<{ user: IUser }, Pick<IUser, 'email' | 'password'>>({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        body: userData,
      }),
    }),
    updateUser: build.mutation<{ updatedUser: IUser }, Partial<IUser>>({
      query: (userData) => ({
        url: '/user/update-user',
        method: 'PATCH',
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useUpdateUserMutation } =
  userApi;
