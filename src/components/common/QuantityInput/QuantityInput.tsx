import { FaPlus, FaMinus } from 'react-icons/fa';

// extras
import { QuantityInputWrapper } from './QuantityInput.styles';

export type QuantityInputProps = {
  quantity: number;
  onChange: (type: string) => void;
};

function QuantityInput({ quantity = 0, onChange }: QuantityInputProps) {
  return (
    <QuantityInputWrapper>
      <div>
        <button className='quantity-button' onClick={() => onChange('minus')}>
          <FaMinus />
        </button>
      </div>
      <p className='quantity-text'>{quantity}</p>
      <div>
        <button className='quantity-button' onClick={() => onChange('plus')}>
          <FaPlus />
        </button>
      </div>
    </QuantityInputWrapper>
  );
}

export default QuantityInput;
