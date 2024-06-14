// mui components
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

type Props = {
  total: number;
};

function CartSummary({ total }: Props) {
  return (
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
              <TableCell align='right'>${total}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shipping Fee</TableCell>
              <TableCell align='right'>Free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell align='right'>${total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default CartSummary;
