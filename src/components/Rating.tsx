import {
  MdOutlineStar,
  MdOutlineStarOutline,
  MdOutlineStarHalf,
} from 'react-icons/md';

type Props = {
  rating: number;
};

function Rating({ rating }: Props) {
  return (
    <div className='flex items-center'>
      <span>
        {rating >= 1 ? (
          <MdOutlineStar className='text-yellow-400 w-5 h-5' />
        ) : rating >= 0.5 ? (
          <MdOutlineStarHalf className='text-yellow-400 w-5 h-5' />
        ) : (
          <MdOutlineStarOutline className='text-yellow-400 w-5 h-5' />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <MdOutlineStar className='text-yellow-400 w-5 h-5' />
        ) : rating >= 1.5 ? (
          <MdOutlineStarHalf className='text-yellow-400 w-5 h-5' />
        ) : (
          <MdOutlineStarOutline className='text-yellow-400 w-5 h-5' />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <MdOutlineStar className='text-yellow-400 w-5 h-5' />
        ) : rating >= 2.5 ? (
          <MdOutlineStarHalf className='text-yellow-400 w-5 h-5' />
        ) : (
          <MdOutlineStarOutline className='text-yellow-400 w-5 h-5' />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <MdOutlineStar className='text-yellow-400 w-5 h-5' />
        ) : rating >= 3.5 ? (
          <MdOutlineStarHalf className='text-yellow-400 w-5 h-5' />
        ) : (
          <MdOutlineStarOutline className='text-yellow-400 w-5 h-5' />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <MdOutlineStar className='text-yellow-400 w-5 h-5' />
        ) : rating >= 4.5 ? (
          <MdOutlineStarHalf className='text-yellow-400 w-5 h-5' />
        ) : (
          <MdOutlineStarOutline className='text-yellow-400 w-5 h-5' />
        )}
      </span>
      <p className='ms-1 text-sm font-medium text-gray-500 dark:text-gray-400'>
        {rating}
      </p>
      <p className='ms-1 text-sm font-medium text-gray-500 dark:text-gray-400'>
        out of
      </p>
      <p className='ms-1 text-sm font-medium text-gray-500 dark:text-gray-400'>
        5
      </p>
    </div>
  );
}

export default Rating;
