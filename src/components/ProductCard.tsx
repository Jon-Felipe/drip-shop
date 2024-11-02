import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';

export interface IProduct {
  _id: string;
  title: string;
  description?: string | undefined;
  extraInfo?: string[] | undefined;
  image: string;
  price: number;
  colour: string;
  sizes: string[];
  material: string;
  brand: string;
  departmentId: string;
}

type Props = {
  product: IProduct;
};

function ProductCard({ product }: Props) {
  return (
    <article className='relative'>
      <Link to={`/products/${product._id}`}>
        <img src='../images/mens_shirt.jpg' alt={product.title} />
        <div className='mt-2'>
          <h4 className='truncate text-sm font-semibold capitalize'>
            {product.title}
          </h4>
          <p className='text-neutral-400 text-xs'>By {product.brand}</p>
          <p className='text-lg'>R{product.price}</p>
        </div>
      </Link>
      <div className='absolute right-0 bottom-0 cursor-pointer'>
        <MdFavoriteBorder className='w-6 h-6' />
      </div>
    </article>
  );
}

export default ProductCard;
