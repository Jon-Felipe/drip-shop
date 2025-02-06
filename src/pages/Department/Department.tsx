import { useState } from 'react';

// components
import Dropdown, {
  IDropdownList,
} from '../../components/common/Dropdown/Dropdown';
import CardLink from '../../components/CardLink/CardLink';
import Divider from '../../components/common/Divider/Divider';

// extras
import {
  DepartmentWrapper,
  FilterWrapper,
  ContentWrapper,
} from './Department.styles';
import bannerImg from '../../../public/images/daily_offer.jpg';

const categories: IDropdownList[] = [
  { id: 1, text: 'Shirts' },
  { id: 2, text: 'Pants' },
  { id: 3, text: 'Jackets + coats' },
  { id: 4, text: 'Jeans' },
];

const brands: IDropdownList[] = [
  { id: 1, text: 'H&M' },
  { id: 2, text: 'Nike' },
  { id: 3, text: 'Adidas' },
  { id: 4, text: 'Polo' },
];

type DepartmentProps = {};

function Department({}: DepartmentProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(true);
  const [isBrandsOpen, setIsBrandsOpen] = useState<boolean>(true);

  return (
    <DepartmentWrapper>
      {/* filters */}
      <FilterWrapper>
        {/* categories dropdown */}
        <Dropdown
          title='Categories'
          listItems={categories}
          isOpen={isCategoryOpen}
          setIsOpen={() => setIsCategoryOpen(!isCategoryOpen)}
        />
        <br />
        <Divider />
        <br />
        {/* categories dropdown */}
        <Dropdown
          title='Brands'
          listItems={brands}
          isOpen={isBrandsOpen}
          setIsOpen={() => setIsBrandsOpen(!isBrandsOpen)}
        />
      </FilterWrapper>
      {/* content */}
      <ContentWrapper>
        <div className='banner-image'>
          <CardLink path='/' imageUrl={bannerImg} />
        </div>
      </ContentWrapper>
    </DepartmentWrapper>
  );
}

export default Department;
