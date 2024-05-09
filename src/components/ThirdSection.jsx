import lv from '/lv.png';
import gucci from '/guc.webp';
import land from '/land.png';
import celine from '/celine.png';
import newyork from '/newyork.webp';
import rolex from '/rolea.webp';
import people from '/people.webp';
import dior from '/diorr.webp';
import { FaArrowRight } from 'react-icons/fa';

const ThirdSection = () => {
  return (
    <section data-theme="luxury" className="bg-secondary text-white grid gap-10 py-12">
      <div className='grid grid-cols-3 gap-10'>
        <img className="w-36" src={lv} alt="lv" />
        <img src={gucci} alt="gucci" className='justify-self-center w-60' />
        <img src={land} alt="land" className='justify-self-end w-36' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 h-96 md:mb-[70px] lg:mb-0'>
        <img src={celine} alt="celine" className='hidden md:block h-full' />
        <div className='flex flex-col items-center gap-7 mx-5'>
          <div>EMBRACE LUXURY SHOPPING</div>
          <div className='text-3xl md:text-5xl text-center font-bold'>Shopping locations are simple</div>
          <div className='text-center'>
            Providing effortless access to global luxury brands spanning physical and online boutiques. Connect 
            with a dedicated ShopWise representative for tailored support during your entire shopping experience.
          </div>
          <div className='flex items-center gap-3 bg-white text-info cursor-pointer button-style'>Explore Stores <FaArrowRight /></div>
        </div>
        <img src={newyork} alt="newyork" className='hidden md:block justify-self-end h-full' />
      </div>
      <div className='grid grid-cols-3 gap-10'>
        <img width={176} src={rolex} alt="rolex" />
        <img width={224} src={people} alt="people" className='justify-self-center' />
        <img width={176} src={dior} alt="dior" className='justify-self-end' />
      </div>
    </section>
  )
}

export default ThirdSection