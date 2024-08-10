import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// extras
import { dummy_brands } from '../../utils/constants';

function BrandLinkCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section className='my-8'>
      <h3 className='text-center font-bold'>Our Brands</h3>
      <div className='mt-4'>
        <Slider {...settings}>
          {dummy_brands.map((brand) => (
            <article key={brand.id} className='px-2'>
              <img src={brand.image} alt={brand.title} />
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default BrandLinkCards;
