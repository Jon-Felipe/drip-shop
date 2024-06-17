// mui components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

type Props = {
  shippingFee: number;
  total: number;
};

function CartSummary({ shippingFee, total }: Props) {
  return (
    <Box component='article'>
      <Typography component='h3' variant='h5' fontWeight={600}>
        Cart Totals
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginY: '20px',
        }}
      >
        <Typography component='p' variant='caption'>
          Subtotal
        </Typography>
        <Typography component='p' variant='caption'>
          ${total}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginY: '20px',
        }}
      >
        <Typography component='p' variant='caption'>
          Shipping Fee
        </Typography>
        <Typography component='p' variant='caption'>
          {shippingFee === 0 ? 'Free' : `$${shippingFee}`}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginY: '20px',
        }}
      >
        <Typography component='p' variant='body1' fontWeight={600}>
          Total
        </Typography>
        <Typography component='p' variant='body1' fontWeight={600}>
          ${total + shippingFee}
        </Typography>
      </Box>
      <Button variant='contained' fullWidth>
        Checkout
      </Button>
    </Box>
  );
}

export default CartSummary;
