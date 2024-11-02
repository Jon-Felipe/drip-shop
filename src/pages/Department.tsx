import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetDepartmentQuery } from '../slices/departmentsApiSlice';

// components
import ProductCard from '../components/ProductCard';
import Select from '../components/Select';
import Spinner from '../components/Spinner';
import Dropdown from '../components/Dropdown';
import PriceRange from '../components/PriceRange';

// extras
import {
  brands,
  categories,
  itemsPerPageOptions,
  sortOptions,
} from '../utils/constants';

function Department() {
  const [limit, setLimit] = useState<number>(10);
  const [sort, setSort] = useState<string>('a-z');

  const { department } = useParams();

  const { data, isLoading, isFetching } = useGetDepartmentQuery({
    departmentParam: department!,
    sortValue: sort,
    limit,
  });

  if (isLoading || isFetching) {
    return (
      <div className='flex items-center justify-center mt-20'>
        <Spinner />
      </div>
    );
  }

  if (!data) {
    return <p>No department found</p>;
  }

  const {
    department: { products, text, description },
  } = data;

  return (
    <>
      <section className='text-center mb-10'>
        <h3 className='text-xl lg:text-3xl font-semibold mb-5 capitalize'>
          {text}
        </h3>
        <p className='text-sm lg:text-base'>{description}</p>
      </section>
      <section className='flex flex-col md:flex-row md:justify-between md:items-center mb-6'>
        <p className='font-semibold capitalize text-sm mb-4'>
          {products.length} products found
        </p>
        <div className='w-full max-w-sm flex items-center justify-between gap-x-4'>
          <div className='flex items-center justify-between gap-x-4'>
            <p className='uppercase font-semibold text-sm'>Items per page</p>
            <Select
              value={limit}
              onChange={(e) => setLimit(+e.target.value)}
              options={itemsPerPageOptions}
            />
          </div>
          <div className='flex items-center justify-between gap-x-4'>
            <p className='uppercase font-semibold text-sm'>Sort by</p>
            <Select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              options={sortOptions}
            />
          </div>
        </div>
      </section>
      <div className='grid grid-cols-[200px_1fr] gap-x-4'>
        {/* filters */}
        <section>
          {/* categories */}
          <Dropdown title='Categories' options={categories} />
          <br />
          {/* price range */}
          <PriceRange />
          <br />
          {/* brands */}
          <Dropdown title='More brands' options={brands} />
        </section>
        <section className='grid grid-cols-2 lg:grid-cols-6 gap-6'>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </section>
      </div>
    </>
  );
}

export default Department;
