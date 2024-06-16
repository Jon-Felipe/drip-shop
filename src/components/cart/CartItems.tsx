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
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  cartItems: ICart[];
};

function CartItems({ cartItems }: Props) {
  const dispatch = useAppDispatch();

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Product</TableCell>
            <TableCell align='right' sx={{ fontWeight: 'bold' }}>
              Price
            </TableCell>
            <TableCell align='right' sx={{ fontWeight: 'bold' }}>
              Quantity
            </TableCell>
            <TableCell align='right' sx={{ fontWeight: 'bold' }}>
              Total
            </TableCell>
            <TableCell></TableCell>
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
                      maxWidth={150}
                      maxHeight={150}
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
                <TableCell align='right'>${cartItem.product.price}</TableCell>
                <TableCell align='right'>{cartItem.quantity}</TableCell>
                <TableCell align='right'>
                  ${(cartItem.product.price * cartItem.quantity).toFixed(2)}
                </TableCell>
                <TableCell align='right'>
                  <IconButton
                    color='error'
                    onClick={() =>
                      dispatch(removeFromCart(cartItem.product.id))
                    }
                  >
                    <DeleteIcon />
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
