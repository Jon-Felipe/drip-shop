import { useAppSelector } from '../hooks/hooks';

// components
import Input from '../components/Input';

function Checkout() {
  const { user } = useAppSelector((store) => store.user);

  return (
    <div className='block lg:flex lg:gap-x-6'>
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
                value={user?.firstName}
                onChange={() => console.log('first name')}
                placeholder='John'
                required={true}
              />
            </div>
            <div className='w-full'>
              <Input
                label='Last Name'
                type='text'
                name='lastName'
                value={user?.lastName}
                onChange={() => console.log('last name')}
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
                value={user?.email}
                onChange={() => console.log('email')}
                placeholder='test@example.com'
                required={true}
              />
            </div>
            <div className='w-full'>
              <Input
                label='Mobile Number'
                type='text'
                name='mobile'
                value={user?.phoneNumber}
                onChange={() => console.log('mobile')}
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
              value={user?.address?.street}
              onChange={() => console.log('address')}
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
                value={user?.address?.country}
                onChange={() => console.log('country')}
                placeholder='South Africa'
                required={true}
              />
            </div>
            <div className='w-full'>
              <Input
                label='City'
                type='text'
                name='city'
                value={user?.address?.city}
                onChange={() => console.log('city')}
                placeholder='Johannesburg'
                required={true}
              />
            </div>
            <div className='w-full'>
              <Input
                label='Postal Code'
                type='text'
                name='postalcode'
                value={user?.address?.postalcode}
                onChange={() => console.log('postalcode')}
                placeholder='1234'
                required={true}
              />
            </div>
          </div>
        </article>
      </section>
      {/* order summary */}
      <section className='w-full basis-2/5'>
        <h4 className='font-medium mb-4'>Order Summary</h4>
        <article className='border rounded p-4'>
          <p>test</p>
        </article>
      </section>
    </div>
  );
}

export default Checkout;
