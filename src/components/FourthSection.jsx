import { images } from "../data"
import Logos from "./Logos"

const FourthSection = () => {
  return (
    <section className="py-20">
      <div className="grid mx-auto lg:max-w-7xl 2xl:max-w-[1550px] max-w-[1550px] px-7">
        <div className="font-bold text-xl text-center">Shop from 40+ Online, Physical and Luxury Stores</div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-items-center py-10">
          {images.map((image) => (
            <div key={image.id}>
              <Logos logo={image.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FourthSection