// components
import DepartmentLinkCard from '../components/home/DepartmentLinkCard';

// extras
import { dummy_brands } from '../utils/constants';

function Home() {
  return (
    <>
      {/* departments */}
      <DepartmentLinkCard />

      {/* brands */}
      {dummy_brands.map((brand) => (
        <div key={brand.id}>
          <p>{brand.title}</p>
        </div>
      ))}
    </>
  );
}

export default Home;
