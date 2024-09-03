import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetDepartmentQuery } from '../slices/departmentsApiSlice';

// components
import ProductCard from '../components/ProductCard';
import Select from '../components/Select';
import Spinner from '../components/Spinner';

function Department() {
  const [sort, setSort] = useState<string>('a-z');

  const { department } = useParams();

  const { data, isLoading, isFetching } = useGetDepartmentQuery({
    departmentParam: department!,
    sortValue: sort,
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

  const { department: foundDepartment } = data;

  return (
    <>
      <section className='text-center mb-10'>
        <h3 className='text-xl lg:text-3xl font-semibold mb-5 capitalize'>
          {foundDepartment.text}
        </h3>
        <p className='text-sm lg:text-base'>{foundDepartment.description}</p>
      </section>
      <section className='flex items-center justify-between mb-6'>
        <p className='font-semibold capitalize text-sm'>
          {foundDepartment.products.length} products found
        </p>
        <Select value={sort} onChange={(e) => setSort(e.target.value)} />
      </section>
      <section className='grid grid-cols-2 lg:grid-cols-6 gap-6'>
        {foundDepartment.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </>
  );
}

export default Department;
