import { removeFromCart } from '../../slices/cartSlice';
import { useAppDispatch } from '../../hooks/hooks';

// extras
import { ICart } from '../../utils/types';

// mui components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  cartItems: ICart[];
};

function CartItems({ cartItems }: Props) {
  const dispatch = useAppDispatch();

  return (
    <TableContainer component='section'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Product</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Total</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((cartItem, index) => {
            return (
              <TableRow key={index}>
                <TableCell component='th' scope='row'>
                  <Box
                    sx={{
                      display: { xs: 'block', sm: 'flex' },
                      alignItems: 'center',
                      columnGap: '20px',
                    }}
                  >
                    <Box
                      component='img'
                      src='../../images/mens_shirt.jpg'
                      maxWidth={80}
                      maxHeight={80}
                      sx={{
                        display: { xs: 'none', md: 'inline-block' },
                        objectFit: 'cover',
                      }}
                    />
                    <Box>
                      <Typography
                        component='h4'
                        sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
                      >
                        {cartItem.product.title} - {cartItem.product.colour}
                      </Typography>
                      <Typography
                        component='p'
                        variant='subtitle2'
                        sx={{ textTransform: 'uppercase', color: '#888' }}
                      >
                        Size: {cartItem.size}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>${cartItem.product.price}</TableCell>
                <TableCell>{cartItem.quantity}</TableCell>
                <TableCell>
                  ${(cartItem.product.price * cartItem.quantity).toFixed(2)}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() =>
                      dispatch(removeFromCart(cartItem.product.id))
                    }
                  >
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartItems;
