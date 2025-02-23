import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// extras
import { CarouselWrapper } from './Carousel.styles';

export interface ICarousel {
  id: string | number;
  title: string;
  image: string;
}

export type CarouselProps = {
  carouselItems: ICarousel[];
};

function Carousel({ carouselItems }: CarouselProps) {
  return (
    <CarouselWrapper>
      <Swiper spaceBetween={20} slidesPerView={4.3} loop={true}>
        {carouselItems.map((brand) => (
          <SwiperSlide key={brand.id}>
            <img src={`${brand.image}`} alt={brand.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
  );
}

export default Carousel;
