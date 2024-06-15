import { useParams } from 'react-router-dom';

// mui components
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// extras
import { dummy_departments, dummy_products } from '../utils/constants';
import ProductCard from '../components/ProductCard';

type Props = {};

function Department({}: Props) {
  const { department } = useParams();

  const foundDepartment = dummy_departments.find(
    (dept) => dept.tag === department
  );

  const foundProducts = dummy_products.filter(
    (product) => product.departmentId === foundDepartment?.id
  );

  return (
    <>
      <Box component='section'>
        <Typography
          component='h3'
          variant='h5'
          align='center'
          fontWeight='bold'
          textTransform='capitalize'
        >
          {foundDepartment?.title}
        </Typography>
        <Typography
          component='p'
          variant='subtitle1'
          align='center'
          marginTop={1}
        >
          {foundDepartment?.description}
        </Typography>
      </Box>
      <Grid container spacing={3} marginTop={5}>
        {foundProducts.map((product, index) => {
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

export default Department;
