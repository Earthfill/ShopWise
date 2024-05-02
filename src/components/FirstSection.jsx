import { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import { IoExtensionPuzzle } from "react-icons/io5";

const FirstSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <section data-theme="luxury" className="bg-secondary text-white pb-10">
      <div className="align-element">
        <div className="text-center text-2xl mx-10 leading-relaxed md:text-3xl md:mx-0 font-bold py-16">Here's the process to begin your shopping</div>
        <div className="grid grid-cols-4 justify-items-center -mx-5 md:mx-40 lg:mx-80 pb-5">
          <button
            className={`font-semibold ${activeTab === 1 ? "bg-white text-secondary button-style" : "hover:bg-slate-700 hover:button-style"}`}
            onClick={() => handleTabClick(1)}
          >
            Step 1
          </button>
          <button
            className={`font-semibold ${activeTab === 2 ? "bg-white text-secondary button-style" : "hover:bg-slate-700 hover:button-style"}`}
            onClick={() => handleTabClick(2)}
          >
            Step 2
          </button>
          <button
            className={`font-semibold ${activeTab === 3 ? "bg-white text-secondary button-style" : "hover:bg-slate-700 hover:button-style"}`}
            onClick={() => handleTabClick(3)}
          >
            Step 3
          </button>
          <button
            className={`font-semibold ${activeTab === 4 ? "bg-white text-secondary button-style" : "hover:bg-slate-700 hover:button-style"}`}
            onClick={() => handleTabClick(4)}
          >
            Step 4
          </button>
        </div>
        <div className="rounded-md">
          {activeTab === 1 && <FirstStep />}
          {activeTab === 2 && <SecondStep />}
          {activeTab === 3 && <ThirdStep />}
          {activeTab === 4 && <FourthStep />}
        </div>
        <div className="bg-slate-700 rounded-md text-center font-bold py-4">
          <div className="text-2xl">Ready to Shop Globally?</div>
          <div className="flex justify-center my-5">
            <a href="" className="flex items-center justify-center gap-1 text-base font-medium bg-primary text-info w-fit button-style"><IoExtensionPuzzle /> Get ShopWise Extension</a>
          </div>
          <div className="text-xs mx-3">Note: Luxury stores are not in the extension. Please login for assistance.</div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection