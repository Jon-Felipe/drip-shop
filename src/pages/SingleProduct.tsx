import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';
import { addToCart } from '../slices/cartSlice';
import {
  MdOutlineRemove,
  MdAdd,
  MdOutlineShoppingCart,
  MdFavorite,
} from 'react-icons/md';

// extras
import { dummy_products } from '../utils/constants';
import { ICart } from '../utils/types';

type Props = {};

function SingleProduct({}: Props) {
  const [inventory, setInventory] = useState<{
    size: string;
    countInStock: number;
  }>({ size: '', countInStock: 0 });
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const foundProduct = dummy_products.find(
    (product) => product.id.toString() === id
  );

  function handleOnToggleQuantity(value: string) {
    if (value === 'increase') {
      if (quantity === inventory.countInStock) {
        setQuantity(inventory.countInStock);
      } else {
        setQuantity(quantity + 1);
      }
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
      product: {
        id: foundProduct?.id || '',
        title: foundProduct?.title || '',
        image: foundProduct?.image || '',
        price: foundProduct?.price || 0,
        colour: foundProduct?.colour || '',
      },
      size: inventory.size,
      quantity,
    };
    dispatch(addToCart(cartObj));
    navigate('/cart');
  }

  return (
    <div className='grid lg:grid-cols-2 gap-x-8'>
      {/* image gallery */}
      <section>
        <img
          src='../images/mens_shirt.jpg'
          alt={foundProduct?.title}
          className='w-full object-cover'
        />
      </section>
      {/* product */}
      <section className='mt-4'>
        <h3 className='text-xl font-semibold'>{foundProduct?.title}</h3>
        <p className='text-neutral-400 font-light text-lg'>
          {foundProduct?.brand}
        </p>
        <div className='mt-6'>
          <p className='text-3xl'>R{foundProduct?.price}</p>
        </div>
        {/* size selector */}
        <div className='mt-6'>
          <h6 className='font-semibold uppercase text-sm'>Select a size</h6>
          <div className='flex items-center gap-x-6 mt-4'>
            {foundProduct?.inventory.sizes.map((s, index) => {
              return (
                <div
                  key={index}
                  className={`border ${
                    inventory.size === s.size ? 'border-2 border-black' : ''
                  }  rounded-full h-14 min-w-14 box-border inline-flex items-center justify-center shrink-0 px-3 cursor-pointer`}
                  onClick={() => {
                    setInventory(s);
                    setQuantity(1);
                  }}
                >
                  <p className='uppercase font-semibold'>{s.size}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* quantity selector */}
        {inventory.size && (
          <div className='mt-6 flex items-center gap-x-14'>
            <h6 className='font-semibold uppercase text-sm'>Quantity</h6>
            <div className='flex items-center justify-center gap-x-14'>
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
            className='w-full bg-red-500 text-white font-bold py-2 uppercase flex items-center justify-center gap-x-2'
          >
            <MdOutlineShoppingCart />
            Add to cart
          </button>
          <button className='w-full border py-2 font-bold uppercase flex items-center justify-center gap-x-2'>
            <MdFavorite />
            Add to wishlist
          </button>
        </div>
        {/* product details */}
        <div className='mt-6'>
          <h6 className='text-neutral-400 font-medium'>Product Details</h6>
          {foundProduct?.description && (
            <p className='text-neutral-400 text-sm'>
              {foundProduct.description}
            </p>
          )}
          {foundProduct?.extraInfo && foundProduct?.extraInfo?.length > 0 && (
            <ul className='mt-4 ml-8'>
              {foundProduct.extraInfo.map((item, index) => (
                <li className='list-disc text-neutral-400' key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className='mt-8 grid grid-cols-4 md:grid-cols-2 gap-4'>
            <div>
              <h6 className='font-semibold'>Colour</h6>
              <p className='capitalize text-neutral-400 text-sm'>
                {foundProduct?.colour}
              </p>
            </div>
            <div>
              <h6 className='font-semibold'>Brand</h6>
              <p className='capitalize text-neutral-400 text-sm'>
                {foundProduct?.brand}
              </p>
            </div>
            <div>
              <h6 className='font-semibold'>Material</h6>
              <p className='capitalize text-neutral-400 text-sm'>
                {foundProduct?.material}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleProduct;
