// components
import DepartmentLinkCard from '../components/home/DepartmentLinkCard';

// mui components
import Grid from '@mui/material/Grid';

// extras
import { dummy_products } from '../utils/constants';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <>
      {/* departments */}
      <DepartmentLinkCard />

      {/* feature products */}
      <Grid container spacing={3} marginTop={5}>
        {dummy_products.map((product, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={2}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Home;
