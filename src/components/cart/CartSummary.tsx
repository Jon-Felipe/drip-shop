import { useNavigate } from 'react-router-dom';

// extras
import { useAppSelector } from '../../hooks/hooks';

function CartSummary() {
  const { cartItems } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const subTotal = cartItems.reduce((acc, curr) => {
    return acc + curr.product.price * curr.quantity;
  }, 0);

  const shippingFee = subTotal > 1000 ? 0 : 100;

  return (
    <article>
      <h3 className='text-xl lg:text-3xl'>Cart Totals</h3>
      <div className='flex items-center justify-between my-4'>
        <p className='text-xs'>Subtotal</p>
        <p className='text-xs'>R{subTotal}</p>
      </div>
      <div className='w-full border'></div>
      <div className='flex items-center justify-between my-4'>
        <p className='text-xs'>Shipping Fee</p>
        <p className='text-xs'>R{shippingFee}</p>
      </div>
      <div className='w-full border'></div>
      <div className='flex items-center justify-between my-4'>
        <p className='font-bold'>Total</p>
        <p className='font-bold'>R{subTotal + shippingFee}</p>
      </div>
      <div className='mt-8'>
        <button
          className='bg-blue-500 text-white w-full p-2 rounded font-semibold'
          onClick={() => navigate('/checkout')}
        >
          Checkout
        </button>
      </div>
    </article>
  );
}

export default CartSummary;
