import { useParams } from 'react-router-dom';

// mui components
import Grid from '@mui/material/Grid';

// extras
import { dummy_products } from '../utils/constants';
import ProductCard from '../components/ProductCard';

type Props = {};

function Department({}: Props) {
  const { department } = useParams();

  const foundProducts = dummy_products.filter(
    (product) => product.department === department
  );

  return (
    <Grid container spacing={3} marginTop={5}>
      {foundProducts.map((product, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4} lg={2}>
            <ProductCard product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Department;
