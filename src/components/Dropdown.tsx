import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

export interface IDropdownOption {
  id: string | number;
  text: string;
  url: string;
}

type Props = {
  title: string;
  options: IDropdownOption[];
};

function Dropdown({ title, options }: Props) {
  const [showOptions, setShowOptions] = useState<boolean>(true);

  return (
    <>
      <button
        onClick={() => setShowOptions(!showOptions)}
        className='w-full flex items-center justify-between font-semibold text-lg'
      >
        {title}
        <span>{showOptions ? <FaCaretUp /> : <FaCaretDown />}</span>
      </button>
      <hr />
      {showOptions && (
        <div className='space-y-2 mt-2'>
          {options.map((category) => (
            <Link
              key={category.id}
              to={`/${category.url}`}
              className='block text-sm hover:font-semibold'
            >
              {category.text}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Dropdown;
