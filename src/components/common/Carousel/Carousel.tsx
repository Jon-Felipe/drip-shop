import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// extras
import { CarouselWrapper } from './Carousel.styles';
import { brands } from '../../../utils/constants';

function Carousel() {
  return (
    <CarouselWrapper>
      <Swiper spaceBetween={20} slidesPerView={4.3} loop={true}>
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <img src={`${brand.image}`} alt={brand.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
  );
}

export default Carousel;
