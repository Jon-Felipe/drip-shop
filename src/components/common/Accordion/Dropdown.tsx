import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

// extras
import { DropdownWrapper } from './Dropdown.styles';

export interface IDropdownList {
  id: string | number;
  text: string;
}

export type DropdownProps = {
  title: string;
  listItems: IDropdownList[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Dropdown({
  title,
  listItems,
  isOpen = true,
  setIsOpen,
}: DropdownProps) {
  return (
    <DropdownWrapper>
      <button className='dropdown-btn' onClick={() => setIsOpen(!isOpen)}>
        <span className='dropdown-btn__title'>{title}</span>
        <span className='dropdown-btn__icon'>
          {isOpen ? <FaCaretUp /> : <FaCaretDown />}
        </span>
      </button>
      {isOpen && (
        <div className='listitems'>
          {listItems.map((item) => (
            <p key={item.id} className='listitems__text'>
              {item.text}
            </p>
          ))}
        </div>
      )}
    </DropdownWrapper>
  );
}

export default Dropdown;
