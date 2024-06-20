import { MdOutlineRemove, MdAdd } from 'react-icons/md';
import { removeFromCart } from '../../slices/cartSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { toggleCartQuantity } from '../../slices/cartSlice';

// extras
import { ICart } from '../../utils/types';

type Props = {
  cartItems: ICart[];
};

function CartItems({ cartItems }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className='relative shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th scope='col' className='hidden lg:inline-block px-16 py-3'>
              <span className='sr-only'>Image</span>
            </th>
            <th scope='col' className='px-6 py-3'>
              Product
            </th>
            <th scope='col' className='px-6 py-3'>
              Quantity
            </th>
            <th scope='col' className='px-6 py-3'>
              Price
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem, index) => (
            <tr key={index} className='bg-white border-b hover:bg-gray-50'>
              <td className='hidden lg:inline-block p-4'>
                <img
                  src='../images/mens_shirt.jpg'
                  alt={cartItem.product.title}
                  className='w-full max-w-16 object-cover'
                />
              </td>
              <td className='px-6 py-4 font-semibold text-gray-900 truncate'>
                {cartItem.product.title}
              </td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <button
                    className='inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200'
                    type='button'
                    onClick={() =>
                      dispatch(
                        toggleCartQuantity({
                          prodIndex: index,
                          actionValue: 'decrease',
                        })
                      )
                    }
                  >
                    <MdOutlineRemove />
                  </button>
                  <div>
                    <p>{cartItem.quantity}</p>
                  </div>
                  <button
                    className='inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200'
                    type='button'
                    onClick={() =>
                      dispatch(
                        toggleCartQuantity({
                          prodIndex: index,
                          actionValue: 'increase',
                        })
                      )
                    }
                  >
                    <MdAdd />
                  </button>
                </div>
              </td>
              <td className='px-6 py-4 font-semibold text-gray-900'>
                R{cartItem.product.price}
              </td>
              <td className='px-6 py-4'>
                <button
                  className='font-medium text-red-600'
                  onClick={() => dispatch(removeFromCart(cartItem.product.id))}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartItems;
