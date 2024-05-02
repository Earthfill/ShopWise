import image from '/step1.svg';

const FirstStep = () => {
  return (
    <div className="md:h-full md:pb-6 md:grid md:grid-cols-2 md:gap-36">
      <div className="py-5">
        <img src={image} alt="website example" className="w-80" />
      </div>
      <div className="py-7">
        <div className="font-bold text-xl">Shop and download the extension</div>
        <div className="flex items-baseline gap-5 py-5">
          <div><span className="button-style bg-success">1</span></div>
          <div className="md:grid">
            <div className="font-bold text-lg">Shop</div>
            <div className="pt-2 text-slate-300">Shop with one of our many supported online store & place desired items in cart.</div>
          </div>
        </div>
        <div className="flex items-baseline gap-5">
          <div><span className="button-style bg-success">2</span></div>
          <div className="md:grid">
            <div className="font-bold text-lg">Download ShopWise extension</div>
            <div className="pt-2 text-slate-300">Initiate by installing the extension on your chosen modern browser. Shop, then activate to get the cart ID.</div>
          </div>
        </div>
        <button className="button-style my-5 bg-slate-700 text-slate-200">Learn more</button>
      </div>
    </div>
  )
}

export default FirstStep