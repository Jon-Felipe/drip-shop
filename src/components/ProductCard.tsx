import { Link } from 'react-router-dom';

// mui components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// extras
import { IProduct } from '../utils/types';

type Props = {
  product: IProduct;
};

function ProductCard({ product }: Props) {
  return (
    <Card
      elevation={0}
      component={Link}
      to={`/products/${product.id}`}
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
  );
}

export default ProductCard;
