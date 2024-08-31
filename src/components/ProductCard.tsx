import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';

// extras
import { IProduct } from '../utils/types';

type Props = {
  product: IProduct;
};

function ProductCard({ product }: Props) {
  return (
    <article className='relative'>
      <Link to={`/products/${product.id}`}>
        <img src='../images/mens_shirt.jpg' alt={product.title} />
        <div className='relative mt-2'>
          <h4 className='truncate text-sm font-semibold capitalize'>
            {product.title}
          </h4>
          <p className='text-neutral-400 text-xs'>By {product.brand}</p>
          <p className='text-lg'>R{product.price}</p>
        </div>
      </Link>
      <div className='absolute right-0 bottom-0 cursor-pointer'>
        <MdFavoriteBorder className='w-5 h-5' />
      </div>
    </article>
  );
}

export default ProductCard;
