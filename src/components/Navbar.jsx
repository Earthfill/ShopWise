import { ImCart } from "react-icons/im";
import { IoExtensionPuzzle } from "react-icons/io5";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="bg-neutral text-neutral">
      <div className="hidden lg:flex py-6 items-center justify-between align-element">
        <div className="flex items-center">
          <div className="flex items-center gap-3 border border-white button-style text-base-100">
            <ImCart />
            ShopWise
          </div>
          <svg className="-mx-[0.3rem] overflow-visible" width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.23981 24.9776C9.20885 16.2361 18.5144 18.6786 21.2398 24.9776V1.99999C17.1904 9.88512 8.14232 9.93851 2.73995 1.99997C-2.66243 -5.93858 6 14.5 6 14.5C4.87126 18.4027 4.78274 19.2531 3.23981 24.9776Z" fill="white"></path>
          </svg>
          <NavLinks />
        </div>
        <div className="flex items-center">
          <a href="" className="bg-base-100 button-style">Login</a>
          <svg className="-mx-[0.3rem] overflow-visible" width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.23981 24.9776C9.20885 16.2361 18.5144 18.6786 21.2398 24.9776V1.99999C17.1904 9.88512 8.14232 9.93851 2.73995 1.99997C-2.66243 -5.93858 6 14.5 6 14.5C4.87126 18.4027 4.78274 19.2531 3.23981 24.9776Z" fill="white"></path>
          </svg>
          <a href="" className="flex items-center gap-1 bg-base-100 button-style"><IoExtensionPuzzle /> Get ShopWise Extension</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar