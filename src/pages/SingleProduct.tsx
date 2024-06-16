import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';
import { addToCart } from '../slices/cartSlice';

// mui components
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

// extras
import { dummy_products } from '../utils/constants';
import { ICart } from '../utils/types';

function SingleProduct() {
  const [size, setSize] = useState<{ size: string; countInStock: number }>({
    size: '',
    countInStock: 0,
  });
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const foundProduct = dummy_products.find(
    (product) => product.id.toString() === id
  );

  function handleOnToggleQuantity(value: string) {
    if (value === 'increase') {
      if (quantity === size.countInStock) {
        setQuantity(size.countInStock);
      } else {
        setQuantity(quantity + 1);
      }
    } else if (value === 'decrease') {
      setQuantity((prevState) => {
        if (prevState === 1) {
          return 1;
        } else {
          return prevState - 1;
        }
      });
    }
  }

  function handleAddToCart() {
    const cartObj: ICart = {
      product: {
        id: foundProduct?.id || '',
        title: foundProduct?.title || '',
        image: foundProduct?.image || '',
        price: foundProduct?.price || 0,
        colour: foundProduct?.colour || '',
      },
      size: size.size,
      quantity,
    };
    dispatch(addToCart(cartObj));
    navigate('/cart');
  }

  return (
    <Grid container spacing={4}>
      {/* image gallery */}
      <Grid item xs={12} sm={5} component='section'>
        <img
          src='../images/mens_shirt.jpg'
          alt={foundProduct?.title}
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </Grid>
      {/* product */}
      <Grid item xs={12} sm={7} component='section'>
        {/* product title */}
        <Typography component='h3' variant='h5' gutterBottom>
          {foundProduct?.title}
        </Typography>
        {/* product brand */}
        <Typography component='p' sx={{ color: '#888', marginBottom: '20px' }}>
          {foundProduct?.brand}
        </Typography>
        {/* product price */}
        <Typography component='p' variant='h4'>
          ${foundProduct?.price.toFixed(2)}
        </Typography>
        {/* product size */}
        <Box>
          <Typography
            component='p'
            variant='h6'
            marginTop='20px'
            marginBottom='10px'
          >
            Select a size
          </Typography>
          <Box sx={{ display: 'flex', columnGap: '20px' }}>
            {foundProduct?.inventory.sizes.map((s, index) => {
              return (
                <Box
                  key={index}
                  component='div'
                  onClick={() => setSize(s)}
                  sx={{
                    border: `2px solid ${
                      size.size === s.size ? '#f58723' : '#d9d9d9'
                    }`,
                    borderRadius: '28px',
                    color: `${size.size === s.size ? '#f58723' : '#000'}`,
                    boxSizing: 'border-box',
                    display: 'inline-flex',
                    flexShrink: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '56px',
                    minWidth: '56px',
                    padding: '0 12px',
                    cursor: 'pointer',
                  }}
                >
                  <Typography component='p' sx={{ textTransform: 'uppercase' }}>
                    {s.size}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        {/* product quantity */}
        {size.size && (
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}
          >
            <Typography component='p' variant='h6'>
              Quantity
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '40px',
                marginLeft: '100px',
              }}
            >
              <IconButton onClick={() => handleOnToggleQuantity('decrease')}>
                <RemoveIcon />
              </IconButton>
              <Typography component='p'>{quantity}</Typography>
              <IconButton onClick={() => handleOnToggleQuantity('increase')}>
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
        )}
        {/* action buttons */}
        <Box
          component='div'
          sx={{
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            columnGap: '20px',
            marginTop: '20px',
          }}
        >
          <Button
            variant='contained'
            size='large'
            color='error'
            startIcon={<ShoppingCartOutlinedIcon />}
            sx={{ width: '100%', fontSize: { xs: '12px', sm: '14px' } }}
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
          <Button
            variant='outlined'
            color='inherit'
            size='large'
            startIcon={<FavoriteIcon />}
            sx={{ width: '100%', fontSize: { xs: '12px', sm: '14px' } }}
          >
            Add to wishlist
          </Button>
        </Box>
        {/* product details */}
        <Box component='div' marginTop='20px'>
          <Typography component='h6' sx={{ color: '#888', fontSize: '16px' }}>
            Product Details
          </Typography>
          {foundProduct?.description && (
            <Typography
              component='p'
              sx={{ color: '#888', marginTop: '5px', fontSize: '14px' }}
            >
              {foundProduct.description}
            </Typography>
          )}
          {foundProduct?.extraInfo && foundProduct?.extraInfo?.length > 0 && (
            <ul>
              {foundProduct.extraInfo.map((item, index) => {
                return (
                  <li key={index} style={{ color: '#888' }}>
                    <Typography
                      component='p'
                      sx={{
                        margin: '5px 0',
                        fontSize: '14px',
                      }}
                    >
                      {item}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          )}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                Colour
              </Typography>
              <Typography
                component='p'
                sx={{
                  color: '#888',
                  fontSize: '14px',
                  textTransform: 'capitalize',
                }}
              >
                {foundProduct?.colour}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                Brand
              </Typography>
              <Typography
                component='p'
                sx={{ color: '#888', fontSize: '14px' }}
              >
                {foundProduct?.brand}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                Material
              </Typography>
              <Typography
                component='p'
                sx={{ color: '#888', fontSize: '14px' }}
              >
                {foundProduct?.material}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SingleProduct;
