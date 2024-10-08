import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../hooks/hooks';
import { addToCart } from '../slices/cartSlice';
import {
  MdOutlineRemove,
  MdAdd,
  MdOutlineShoppingCart,
  MdFavorite,
} from 'react-icons/md';

// components
import Rating from '../components/Rating';

// extras
import { ICart } from '../utils/types';
import { useGetProductQuery } from '../slices/productsApiSlice';
import Spinner from '../components/Spinner';

type Props = {};

function SingleProduct({}: Props) {
  const [size, setSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetProductQuery(id!);

  function handleOnToggleQuantity(value: string) {
    if (value === 'increase') {
      setQuantity(quantity + 1);
    } else if (value === 'decrease') {
      setQuantity((prevState) => {
        if (prevState === 1) {
          return 1;
        } else {
          return prevState - 1;
        }
      });
    }
  }

  function handleAddToCart() {
    const cartObj: ICart = {
      cartId: data?.product._id + size || '',
      product: {
        _id: data?.product._id || '',
        title: data?.product.title || '',
        image: data?.product.image || '',
        price: data?.product.price || 0,
        colour: data?.product.colour || '',
      },
      size,
      quantity,
    };

    if (!size) {
      return toast.error('Please Choose A Size');
    }

    toast.success('Item Added To Cart');
    dispatch(addToCart(cartObj));
    navigate('/cart');
  }

  if (isLoading || isFetching) {
    return <Spinner />;
  }

  if (!data) {
    return <p>No department found</p>;
  }

  const { product } = data;

  return (
    <div className='grid lg:grid-cols-[450px_1fr] gap-x-8'>
      {/* image gallery */}
      <section>
        <img
          src='../images/mens_shirt.jpg'
          alt={product?.title}
          className='w-full object-cover'
        />
      </section>
      {/* product */}
      <section className='mt-4'>
        <h3 className='text-3xl font-semibold capitalize'>{product?.title}</h3>
        <p className='text-neutral-400 font-light text-lg'>{product?.brand}</p>
        <Rating rating={4} />
        <div className='mt-6'>
          <p className='text-3xl'>R{product?.price.toFixed(2)}</p>
        </div>

        {/* size selector */}
        <div className='mt-6'>
          <h6 className='font-semibold uppercase text-sm'>Select a size</h6>
          <div className='flex items-center gap-x-2 mt-4'>
            {product?.sizes.map((s, index) => {
              return (
                <div
                  key={index}
                  className={`border ${
                    size === s ? 'border-2 border-black' : ''
                  }  rounded-full h-10 w-10 box-border inline-flex items-center justify-center shrink-0 px-3 cursor-pointer`}
                  onClick={() => {
                    setSize(s);
                    setQuantity(1);
                  }}
                >
                  <p className='uppercase font-semibold text-sm'>{s}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* quantity selector */}
        {size && (
          <div className='mt-6 flex items-center gap-x-14'>
            <h6 className='font-semibold uppercase text-sm'>Quantity</h6>
            <div className='flex items-center justify-center gap-x-10'>
              <button onClick={() => handleOnToggleQuantity('decrease')}>
                <MdOutlineRemove className='w-5 h-5' />
              </button>
              <p>{quantity}</p>
              <button onClick={() => handleOnToggleQuantity('increase')}>
                <MdAdd className='w-5 h-5' />
              </button>
            </div>
          </div>
        )}
        {/* product action buttons */}
        <div className='mt-6 flex flex-col lg:flex-row lg:items-center gap-y-4 lg:gap-x-4'>
          <button
            onClick={handleAddToCart}
            className='w-full bg-red-500 text-white font-bold py-3 uppercase flex items-center justify-center gap-x-2'
          >
            <MdOutlineShoppingCart />
            Add to cart
          </button>
          <button className='w-full border py-3 font-bold uppercase flex items-center justify-center gap-x-2'>
            <MdFavorite />
            Add to wishlist
          </button>
        </div>
        {/* product details */}
        <div className='mt-6'>
          <h6 className='font-semibold'>Product Details</h6>
          {product?.description && (
            <p className='text-neutral-400 text-sm'>{product.description}</p>
          )}
          {product?.extraInfo && product?.extraInfo?.length > 0 && (
            <ul className='mt-4 ml-8'>
              {product.extraInfo.map((item, index) => (
                <li className='list-disc text-neutral-400' key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className='mt-4 grid grid-cols-4 md:grid-cols-2 gap-4'>
            <div>
              <h6 className='font-semibold'>Colour</h6>
              <p className='capitalize text-neutral-400 text-sm'>
                {product?.colour}
              </p>
            </div>
            <div>
              <h6 className='font-semibold'>Brand</h6>
              <p className='capitalize text-neutral-400 text-sm'>
                {product?.brand}
              </p>
            </div>
            <div>
              <h6 className='font-semibold'>Material</h6>
              <p className='capitalize text-neutral-400 text-sm'>
                {product?.material}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleProduct;
