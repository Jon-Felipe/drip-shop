import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../slices/cartSlice';

// extras
import { useCreateOrderMutation } from '../slices/orderApiSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { IDeliveryInformation, IOrder } from '../utils/types';

// components
import Input from '../components/Input';

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.user);
  const { cartItems } = useAppSelector((store) => store.cart);
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const [deliveryInfo, setDeliveryInfo] = useState<IDeliveryInformation>({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phoneNumber: user?.phoneNumber || '',
    shippingAddress: {
      street: user?.address?.street || '',
      city: user?.address?.city || '',
      country: user?.address?.country || '',
      postalcode: user?.address?.postalcode || '',
    },
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setDeliveryInfo((prevState) => {
      if (deliveryInfo.shippingAddress.hasOwnProperty(name)) {
        return {
          ...prevState,
          shippingAddress: { ...prevState.shippingAddress, [name]: value },
        };
      } else {
        return { ...prevState, [name]: value };
      }
    });
  }

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newOrderPayloadObj: IOrder = {
      orderItems: cartItems.map((cartItem) => {
        return {
          title: cartItem.product.title,
          price: cartItem.product.price,
          quantity: cartItem.quantity,
          size: cartItem.size,
          product: cartItem.product._id,
        };
      }),
      deliveryInformation: deliveryInfo,
      totalPrice: 0,
    };
    try {
      await createOrder(newOrderPayloadObj);
      dispatch(clearCart());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleOnSubmit} className='block lg:flex lg:gap-x-6'>
      <div>
        {/* delivery summary */}
        <section className='w-full basis-3/5'>
          <h4 className='font-medium mb-4'>Delivery Information</h4>
          <article className='border rounded p-4 space-y-4'>
            <div className='flex flex-col lg:flex-row lg:gap-x-6 gap-y-4 lg:gap-y-0'>
              <div className='w-full'>
                <Input
                  label='First Name'
                  type='text'
                  name='firstName'
                  value={deliveryInfo?.firstName}
                  onChange={handleOnChange}
                  placeholder='John'
                  required={true}
                />
              </div>
              <div className='w-full'>
                <Input
                  label='Last Name'
                  type='text'
                  name='lastName'
                  value={deliveryInfo?.lastName}
                  onChange={handleOnChange}
                  placeholder='Doe'
                  required={true}
                />
              </div>
            </div>
            <div className='w-full'>
              <Input
                label='Mobile Number'
                type='text'
                name='phoneNumber'
                value={deliveryInfo?.phoneNumber}
                onChange={handleOnChange}
                placeholder='+123456789'
                required={true}
              />
            </div>
            <div className='w-full'>
              <Input
                label='Address'
                type='text'
                name='street'
                value={deliveryInfo?.shippingAddress?.street}
                onChange={handleOnChange}
                placeholder='123 example street'
                required={true}
              />
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-x-6 gap-y-4 lg:gap-y-0'>
              <div className='w-full'>
                <Input
                  label='City'
                  type='text'
                  name='city'
                  value={deliveryInfo?.shippingAddress?.city}
                  onChange={handleOnChange}
                  placeholder='Johannesburg'
                  required={true}
                />
              </div>
              <div className='w-full'>
                <Input
                  label='Country'
                  type='text'
                  name='country'
                  value={deliveryInfo?.shippingAddress?.country}
                  onChange={handleOnChange}
                  placeholder='South Africa'
                  required={true}
                />
              </div>
              <div className='w-full'>
                <Input
                  label='Postal Code'
                  type='text'
                  name='postalcode'
                  value={deliveryInfo?.shippingAddress?.postalcode}
                  onChange={handleOnChange}
                  placeholder='1234'
                  required={true}
                />
              </div>
            </div>
          </article>
        </section>
      </div>
      {/* order summary */}
      <section className='w-full basis-2/5'>
        <h4 className='font-medium mb-4'>Order Summary</h4>
        <article className='border rounded p-4'>
          {cartItems.map((cartItem) => (
            <div key={cartItem.product._id} className='mb-4'>
              <div className='flex gap-x-4'>
                <img
                  src='../images/mens_shirt.jpg'
                  alt={cartItem.product.title}
                  className='w-16'
                />
                <div className='flex flex-col justify-between'>
                  <div>
                    <h5 className='block text-sm font-medium'>
                      {cartItem.product.title}
                    </h5>
                    <p className='block text-xs'>
                      Quantity: {cartItem.quantity}
                    </p>
                    <p className='block text-xs uppercase'>
                      Size: {cartItem.size}
                    </p>
                  </div>
                  <p className='text-sm font-semibold'>
                    ${(cartItem.product.price * cartItem.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <hr />
          <div className='py-4 space-y-4'>
            <p className='flex items-center justify-between'>
              Subtotal <span>$1250.00</span>
            </p>
            <p className='flex items-center justify-between'>
              Shipping <span>$100.00</span>
            </p>
          </div>
          <hr />
          <div className='py-4'>
            <p className='flex items-center justify-between'>
              Total <span>$1350.00</span>
            </p>
          </div>
          <div className='mt-4'>
            <button
              type='submit'
              disabled={isLoading}
              className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none'
            >
              {isLoading ? 'Submitting Order' : 'Confirm Order'}
            </button>
          </div>
        </article>
      </section>
    </form>
  );
}

export default Checkout;
