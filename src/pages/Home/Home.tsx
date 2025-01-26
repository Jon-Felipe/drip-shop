// components
import CardLink from '../../components/CardLink/CardLink';

// extras
import { DeparmentCardsWrapper, HomeWrapper } from './Home.styles';
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
    </HomeWrapper>
  );
}

export default Home;
