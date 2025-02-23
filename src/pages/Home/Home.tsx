// components
import CardLink from '../../components/CardLink/CardLink';
import Divider from '../../components/common/Divider/Divider';
import Carousel from '../../components/common/Carousel/Carousel';

// extras
import {
  BrandWrapper,
  DeparmentCardsWrapper,
  HomeWrapper,
} from './Home.styles';
import menImg from '../../../public/departments/men.jpg';
import womenImg from '../../../public/departments/women.jpg';
import kidsImg from '../../../public/departments/kids.jpg';
import beautyImg from '../../../public/departments/beauty.jpg';

function Home() {
  return (
    <HomeWrapper>
      {/* deparments */}
      <DeparmentCardsWrapper>
        <CardLink path='/department/men' imageUrl={menImg} />
        <CardLink path='/department/women' imageUrl={womenImg} />
        <CardLink path='/department/kids' imageUrl={kidsImg} />
        <CardLink path='/department/beauty' imageUrl={beautyImg} />
      </DeparmentCardsWrapper>
      {/* brands */}
      <BrandWrapper>
        <div className='brands-title'>
          <Divider />
          <h3>Our Brands</h3>
          <Divider />
        </div>
        <Carousel />
      </BrandWrapper>
    </HomeWrapper>
  );
}

export default Home;
