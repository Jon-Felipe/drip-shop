// components
import Input from '../components/Input';

function Checkout() {
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
                value={''}
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
                value={''}
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
                value={''}
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
                value={''}
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
              value={''}
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
                value={''}
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
                value={''}
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
                value={''}
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
