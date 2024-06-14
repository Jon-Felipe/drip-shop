import { Link } from 'react-router-dom';

// components
import DepartmentLinkCard from '../components/home/DepartmentLinkCard';

// mui components
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// extras
import { dummy_products } from '../utils/constants';

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
              <Card
                elevation={0}
                component={Link}
                to={`products/${product.id}`}
                sx={{ textDecoration: 'none' }}
              >
                <CardMedia
                  sx={{ height: 300 }}
                  image='../images/mens_shirt.jpg'
                  title={product.title}
                />
                <CardContent sx={{ padding: '5px' }}>
                  <Typography
                    component='h3'
                    variant='h6'
                    noWrap
                    sx={{ fontWeight: 'bold', fontSize: '14px' }}
                  >
                    {product.title} - {product.productDetails.color}
                  </Typography>
                  <Typography
                    component='p'
                    variant='body2'
                    sx={{ color: '#888', fontSize: '12px' }}
                  >
                    By {product.productDetails.brand}
                  </Typography>
                  <Box
                    component='div'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography component='p' sx={{ fontSize: '16px' }}>
                      ${product.price.toFixed(2)}
                    </Typography>
                    <IconButton>
                      <FavoriteBorderIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Home;
