import { removeFromCart } from '../slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

// mui components
import Grid from '@mui/material/Grid';
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

function Cart() {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((store) => store.cart);

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
      <Grid item xs={12} sm={8} component='section'>
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
                <TableCell
                  align='right'
                  sx={{ fontWeight: 'bold' }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((cartItem, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      <Box
                        sx={{
                          display: { xs: 'block', sm: 'flex' },
                          alignItems: 'center',
                          columnGap: '10px',
                        }}
                      >
                        <Box
                          component='img'
                          src='../../images/mens_shirt.jpg'
                          maxWidth={100}
                          maxHeight={100}
                          sx={{
                            display: { xs: 'none', md: 'inline-block' },
                            objectFit: 'cover',
                          }}
                        />
                        <Box>
                          <Typography>{cartItem.product.title}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align='right'>
                      ${cartItem.product.price}
                    </TableCell>
                    <TableCell align='right'>{cartItem.quantity}</TableCell>
                    <TableCell align='right'>
                      $
                      {(cartItem.product.price! * cartItem.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell align='right'>
                      <IconButton
                        color='error'
                        onClick={() =>
                          dispatch(removeFromCart(cartItem.product.id!))
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
      </Grid>
      {/* cart summary */}
      <Grid item xs={12} sm={4} component='section'>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2} sx={{ fontWeight: 'bold' }}>
                  Cart Totals
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Subtotal</TableCell>
                <TableCell align='right'>$35.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Shipping Fee</TableCell>
                <TableCell align='right'>Free</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell align='right'>$35.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default Cart;
