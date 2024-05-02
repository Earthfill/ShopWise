import image from '/step3.svg'

const ThirdStep = () => {
  return (
    <div className="md:h-full md:pb-6 md:grid md:grid-cols-2 md:gap-36">
      <div className="py-5">
        <img src={image} alt="website example" className="w-80" />
      </div>
      <div className="py-7">
        <div className="font-bold text-xl">Copy your cart ID and click shopcart</div>
        <div className="flex items-baseline gap-5 py-5">
          <div><span className="button-style bg-success">1</span></div>
          <div className="md:grid">
            <div className="font-bold text-lg">Copy or share code</div>
            <div className="pt-2 text-slate-300">After clicking on 'Create Cart ID' you will generate a 7 digit code. You can copy or save it for later.</div>
          </div>
        </div>
        <div className="flex items-baseline gap-5">
          <div><span className="button-style bg-success">2</span></div>
          <div className="md:grid">
            <div className="font-bold text-lg">Click on shopcart</div>
            <div className="pt-2 text-slate-300">Click on 'Shop Cart' then paste the 7 digit code created to make payments on ShopWse website.</div>
          </div>
        </div>
        <button className="button-style my-5 bg-slate-700 text-slate-200">Learn more</button>
      </div>
    </div>
  )
}

export default ThirdStep