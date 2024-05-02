import { FaArrowRight } from 'react-icons/fa';
import map from '/map.svg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FifthSection, FirstSection, Footer, FourthSection, Logos, SecondSection, SixthSection, ThirdSection } from '../components';
import { images } from '../data';


const Landing = () => {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 15000,
    autoplaySpeed: 50,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  return (
    <main>
      <div className='md:grid'>
        <div className='align-element flex flex-col md:flex-row justify-center py-10 md:py-16'>
          <article className='md:mr-36'>
            <h1 className='text-neutral font-bold text-5xl md:text-6xl'>
            The shopping platform for global stores
            </h1>
            <p className='my-7 text-lg'>
              ShopWise helps thousands of people who globally in a single click. It's global shopping, payments and delivery in just one system.
            </p>
            <div className='flex gap-4'> 
              <button className='flex items-center gap-2 bg-neutral text-base-100 button-style hover:bg-blue-300'>Get Started <FaArrowRight /></button>
              <button className='bg-neutral text-base-100 button-style hover:bg-blue-300'>How it Works</button>
            </div>
          </article>
          <article className='pt-10 md:pt-0'>
            <img src={map} alt="job hunt" className='' />
          </article>
        </div>
        <div className='mx-auto lg:max-w-7xl 2xl:max-w-[1550px] max-w-[1550px] px-7'>
          <Slider {...settings}>
            {images.map((image) => (
              <div key={image.id}>
                <Logos logo={image.logo} />
              </div>
            ))}
          </Slider>
        </div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <Footer />
      </div>
    </main>
  )
}

export default Landing