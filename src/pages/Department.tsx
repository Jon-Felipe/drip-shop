import { useState } from 'react';
import { useParams } from 'react-router-dom';

// components
import ProductCard from '../components/ProductCard';

// extras
import { dummy_departments, dummy_products } from '../utils/constants';
import Select from '../components/Select';

function Department() {
  const [sort, setSort] = useState<string>('');

  const { department } = useParams();

  const foundDepartment = dummy_departments.find(
    (dept) => dept.tag === department
  );

  const foundProducts = dummy_products.filter(
    (product) => product.departmentId === foundDepartment?.id
  );

  return (
    <>
      <section className='text-center mb-10'>
        <h3 className='text-xl lg:text-3xl font-semibold mb-5'>
          {foundDepartment?.title}
        </h3>
        <p className='text-sm lg:text-base'>{foundDepartment?.description}</p>
      </section>
      <section className='flex items-center justify-between mb-6'>
        <p className='font-semibold capitalize text-sm'>
          {foundProducts.length} products found
        </p>
        <Select value={sort} onChange={(e) => setSort(e.target.value)} />
      </section>
      <section className='grid grid-cols-2 lg:grid-cols-6 gap-6'>
        {foundProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </>
  );
}

export default Department;
