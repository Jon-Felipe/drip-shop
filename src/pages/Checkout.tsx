import { useState } from 'react';

import { useAppSelector } from '../hooks/hooks';
import { IUser } from '../utils/types';

// components
import Input from '../components/Input';

function Checkout() {
  const {
    user: { user },
    cart,
  } = useAppSelector((store) => store);

  const [userDetails, setUserDetails] = useState<Partial<IUser>>({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || undefined,
    address: {
      street: user?.address?.street || '',
      city: user?.address?.city || '',
      country: user?.address?.country || '',
      postalcode: user?.address?.postalcode || '',
    },
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  return (
    <div className='block lg:flex lg:gap-x-6'>
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
                  value={userDetails?.firstName}
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
                  value={userDetails?.lastName}
                  onChange={handleOnChange}
                  placeholder='Doe'
                  required={true}
                />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-x-6 gap-y-4 lg:gap-y-0'>
              <div className='w-full'>
                <Input
                  label='Email'
                  type='email'
                  name='email'
                  value={userDetails?.email}
                  onChange={handleOnChange}
                  placeholder='test@example.com'
                  required={true}
                />
              </div>
              <div className='w-full'>
                <Input
                  label='Mobile Number'
                  type='text'
                  name='phoneNumber'
                  value={userDetails?.phoneNumber}
                  onChange={handleOnChange}
                  placeholder='+123456789'
                  required={true}
                />
              </div>
            </div>
            <div className='w-full'>
              <Input
                label='Address'
                type='text'
                name='address'
                value={userDetails?.address?.street}
                onChange={handleOnChange}
                placeholder='123 example street'
                required={true}
              />
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-x-6 gap-y-4 lg:gap-y-0'>
              <div className='w-full'>
                <Input
                  label='Country'
                  type='text'
                  name='country'
                  value={userDetails?.address?.country}
                  onChange={handleOnChange}
                  placeholder='South Africa'
                  required={true}
                />
              </div>
              <div className='w-full'>
                <Input
                  label='City'
                  type='text'
                  name='city'
                  value={userDetails?.address?.city}
                  onChange={handleOnChange}
                  placeholder='Johannesburg'
                  required={true}
                />
              </div>
              <div className='w-full'>
                <Input
                  label='Postal Code'
                  type='text'
                  name='postalcode'
                  value={userDetails?.address?.postalcode}
                  onChange={handleOnChange}
                  placeholder='1234'
                  required={true}
                />
              </div>
            </div>
          </article>
        </section>
        {/* payment method */}
        <section className='mt-4'>
          <h4 className='font-medium mb-4'>Payment Method</h4>
          <article className='border rounded p-4'>
            <div className='flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:items-center lg:justify-between'>
              <div className='flex items-center'>
                <input
                  id='default-radio-1'
                  type='radio'
                  value=''
                  name='default-radio'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
                />
                <label
                  htmlFor='default-radio-1'
                  className='ms-2 text-sm font-medium text-gray-900'
                >
                  Online Payment
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id='default-radio-1'
                  type='radio'
                  value=''
                  name='default-radio'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
                />
                <label
                  htmlFor='default-radio-1'
                  className='ms-2 text-sm font-medium text-gray-900'
                >
                  Cash on Delivery
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id='default-radio-1'
                  type='radio'
                  value=''
                  name='default-radio'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
                />
                <label
                  htmlFor='default-radio-1'
                  className='ms-2 text-sm font-medium text-gray-900'
                >
                  POS on Delivery
                </label>
              </div>
            </div>
          </article>
        </section>
      </div>
      {/* order summary */}
      <section className='w-full basis-2/5'>
        <h4 className='font-medium mb-4'>Order Summary</h4>
        <article className='border rounded p-4'>
          {cart.cartItems.map((cartItem) => (
            <div key={cartItem.product.id} className='mb-4'>
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
            <button className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none'>
              Confirm Order
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Checkout;
