import { dripShopApi } from './apiSlice.ts';

// extras
import { IDepartment } from '../utils/types.ts';

const departmentApi = dripShopApi.injectEndpoints({
  endpoints: (build) => ({
    getDepartment: build.query<
      { department: IDepartment },
      { departmentParam: string; sortValue?: string; limit?: number }
    >({
      query: ({ departmentParam, sortValue, limit }) => ({
        url: `/department/${departmentParam}?sort=${sortValue}&limit=${limit}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDepartmentQuery } = departmentApi;
