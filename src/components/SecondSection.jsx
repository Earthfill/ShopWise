import { useRef, useState } from "react"
import Slider from "react-slick";
import { LiaMoneyBillSolid } from 'react-icons/lia';
import { FaBalanceScaleRight, FaBoxOpen, FaShuttleVan } from "react-icons/fa";
import { GiWorld } from 'react-icons/gi';
import { TbShoppingCartHeart } from 'react-icons/tb';
import DescItem from "./DescItem";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";

const SecondSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderRef = useRef(null);
  
  const next = () => {
    sliderRef.slickNext();
    setCurrentSlide(currentSlide + 1);
  };
  
  const previouss = () => {
    sliderRef.slickPrev();
    setCurrentSlide(currentSlide - 1);
  };
  
  const description = [
    {
      title: 'Checkout in naira',
      icon: <LiaMoneyBillSolid size={150} />,
      sub: 'At checkout, payments are made in naira converted at the current market rate.'
    },
    {
      title: 'No custom fees & package losses',
      icon: <FaShuttleVan size={150} />,
      sub: 'ShopWise helps you avoid paying customs and no package losses.'
    },
    {
      title: 'Consolidates shopping',
      icon: <FaBoxOpen size={150} />,
      sub: 'Enabling multi-store purchases in a single country.'
    },
    {
      title: 'Doorstep air freight',
      icon: <GiWorld size={150} />,
      sub: 'Air freight to your door step from across the globe.'
    },
    {
      title: 'Omnichannel luxury shopping',
      icon: <TbShoppingCartHeart size={150} />,
      sub: 'Shop from physical and online locations around the globe.'
    },
    {
      title: 'Fair price guarantee',
      icon: <FaBalanceScaleRight size={150} />,
      sub: "ShopWise's fair price guarantee means you always win!"
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    wlidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className="align-element my-10">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
        afterChange={(index) => setCurrentSlide(index)}
      >
        {description.map((item, index) => (
          <div key={index}>
            <DescItem {...item} />
          </div>
        ))}    
      </Slider>
      <div className="flex justify-center gap-5 my-5">
        <button 
          onClick={previouss}
          className={`rounded-full p-4 text-neutral bg-gray-100 ${currentSlide === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          disabled={currentSlide === 0}
        >
          <ImArrowLeft2 />
        </button>
        <button 
          onClick={next}
          className="rounded-full p-4 text-neutral bg-gray-100"
        >
          <ImArrowRight2 />
        </button>
      </div>
    </div>
  )
}

export default SecondSection