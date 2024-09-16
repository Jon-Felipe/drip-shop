type Props = {};

function PriceRange({}: Props) {
  return (
    <div className='relative mb-6'>
      <label className='font-semibold text-lg'>Price</label>
      <input
        type='range'
        min='0'
        max='1000'
        step='100'
        className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
      />
      <span className='text-sm text-gray-500 absolute start-0 -bottom-6'>
        Min ($100)
      </span>
      <span className='text-sm text-gray-500 absolute end-0 -bottom-6'>
        Max ($1000)
      </span>
    </div>
  );
}

export default PriceRange;
