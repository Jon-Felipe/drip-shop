import { useSearchParams } from 'react-router-dom';

// components
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';

// extraas
import { useGetProductsQuery } from '../slices/productsApiSlice';

const Products = () => {
  const [searchParams] = useSearchParams();

  const { data, isFetching, isLoading } = useGetProductsQuery(
    searchParams.get('search')!
  );

  if (isLoading || isFetching) {
    return (
      <div className='flex items-center justify-center mt-20'>
        <Spinner />
      </div>
    );
  }

  if (data?.products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
      {data?.products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

export default Products;
