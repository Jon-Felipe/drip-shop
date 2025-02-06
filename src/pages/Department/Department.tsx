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
        <br />
        <Divider />
        <br />
        {/* deparment into text */}
        <article className='department__intro'>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            autem.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
            ab illum nisi inventore error consequatur iusto aut est vitae et
            tempore ipsa harum veritatis eius soluta, reiciendis aliquid
            nesciunt odio, culpa iure cupiditate quod, nostrum voluptates!
            Cumque dolorum cum labore natus laborum reprehenderit alias
            laboriosam quam temporibus non. Debitis sequi ex aperiam officiis
            modi fugit quidem illo dignissimos et, magni eveniet at nulla odio
            esse ullam neque ut explicabo voluptates saepe dolore perferendis.
            Itaque non reiciendis cumque molestiae. Quae laudantium officiis
            quia cum molestiae, accusantium aperiam voluptatibus deserunt a
            mollitia quidem minima suscipit eius cumque perspiciatis! Aliquid,
            veritatis eius?
          </p>
        </article>
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
