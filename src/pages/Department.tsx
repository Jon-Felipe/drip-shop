import { useParams } from 'react-router-dom';

// mui components
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '40px',
        }}
      >
        <Typography component='p' sx={{ fontWeight: 'bold' }}>
          {foundProducts.length} items found
        </Typography>
        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id='sort-label'>Newest</InputLabel>
            <Select labelId='sort-label' id='sort' label='Newest'>
              <MenuItem value='newest'>Newest</MenuItem>
              <MenuItem value='top-rated'>Top Rated</MenuItem>
              <MenuItem value='price-high'>Price Low to High</MenuItem>
              <MenuItem value='price-low'>Price High to Low</MenuItem>
              <MenuItem value='discount'>Discount</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Grid container spacing={3} marginTop='5px' component='section'>
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
