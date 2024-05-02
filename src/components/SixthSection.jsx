import { FaArrowRight } from 'react-icons/fa';

const SixthSection = () => {
  return (
    <section className='text-center py-10'>
      <div className="align-element flex flex-col items-center gap-4">
        <div className="font-bold text-3xl md:text-5xl py-5 text-neutral">Shop further with ShopWise</div>
        <div>Join the other 3000+ people shopping globally with ShopWise</div>
        <button className="flex items-center justify-center w-fit gap-4 button-style text-white bg-neutral">
          Explore Stores <FaArrowRight />
        </button>
      </div>
    </section>
  )
}

export default SixthSection