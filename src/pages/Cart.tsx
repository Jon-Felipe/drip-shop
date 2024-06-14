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
    <Grid container spacing={4}>
      {/* cart items */}
      <CartItems cartItems={cartItems} />
      {/* cart summary */}
      <CartSummary total={total} />
    </Grid>
  );
}

export default Cart;
