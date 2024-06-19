import { useAppSelector } from '../hooks/hooks';

// components
import CartItems from '../components/cart/CartItems';
import CartSummary from '../components/cart/CartSummary';

function Cart() {
  const { cartItems, shippingFee, total } = useAppSelector(
    (store) => store.cart
  );

  if (cartItems.length === 0) {
    return (
      <section className='mt-20'>
        <h1 className='text-center text-xl lg:text-4xl font-medium'>
          No items found in your cart
        </h1>
      </section>
    );
  }
  return (
    <>
      <h3 className='text-xl lg:text-4xl font-semibold'>Shopping Cart</h3>
      <div className='grid lg:grid-cols-[1fr_300px] gap-y-8 lg:gap-y-0 lg:gap-x-8'>
        <section className='mt-8 overflow-x-auto'>
          <CartItems cartItems={cartItems} />
        </section>
        <section>
          <CartSummary shippingFee={shippingFee} total={total} />
        </section>
      </div>
    </>
  );
}

export default Cart;
