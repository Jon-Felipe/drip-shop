import { useAppSelector } from '../hooks/hooks';

// components
import CartItems from '../components/cart/CartItems';
import CartSummary from '../components/cart/CartSummary';

// mui components
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Cart() {
  const { cartItems, total } = useAppSelector((store) => store.cart);

  if (cartItems.length === 0) {
    return (
      <Box marginTop='80px'>
        <Typography align='center' component='h4' variant='h5'>
          No items found in your cart.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Box marginBottom={6}>
        <Typography component='h3' variant='h5' align='center'>
          Shopping Cart
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {/* cart items */}
        <Grid item xs={12} sm={8} component='section'>
          <CartItems cartItems={cartItems} />
        </Grid>
        {/* cart summary */}
        <Grid item xs={12} sm={4} component='section'>
          <CartSummary total={total} />
        </Grid>
      </Grid>
    </>
  );
}

export default Cart;
