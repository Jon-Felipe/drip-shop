import { useAppSelector } from '../hooks/hooks';

// components
import CartItems from '../components/cart/CartItems';
import CartSummary from '../components/cart/CartSummary';

// mui components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Cart() {
  const { cartItems, shippingFee, total } = useAppSelector(
    (store) => store.cart
  );

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
      <Box marginBottom={6} component='section'>
        <Typography component='h3' variant='h5' align='center'>
          Shopping Cart
        </Typography>
      </Box>
      {/* cart items */}
      <CartItems cartItems={cartItems} />
      {/* cart summary */}
      <Box marginTop={8} maxWidth={500} marginLeft='auto' component='section'>
        <CartSummary shippingFee={shippingFee} total={total} />
      </Box>
    </>
  );
}

export default Cart;
