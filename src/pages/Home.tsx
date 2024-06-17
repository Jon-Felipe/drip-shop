// components
import DepartmentLinkCard from '../components/home/DepartmentLinkCard';

// extras
import { dummy_products } from '../utils/constants';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <>
      {/* departments */}
      <DepartmentLinkCard />

      {/* feature products */}
      <section className='grid grid-cols-2 lg:grid-cols-6 gap-4 mt-20'>
        {dummy_products.map((product, index) => {
          return (
            <article key={index}>
              <ProductCard product={product} />
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Home;
