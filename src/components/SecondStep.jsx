import image from '/step2.svg';

const SecondStep = () => {
  return (
    <div className="md:h-full md:pb-6 md:grid md:grid-cols-2 md:gap-36">
      <div className="py-5">
        <img src={image} alt="website example" className="w-80" />
      </div>
      <div className="py-7">
        <div className="font-bold text-xl">Generate a unique cart ID for your selected cart</div>
        <div className="flex items-baseline gap-5 py-5">
          <div><span className="button-style bg-success">1</span></div>
          <div className="md:grid">
            <div className="font-bold text-lg">Click an extensions and select ShopWise</div>
            <div className="pt-2 text-slate-300">After opening extensions and clicking on ShopWise, you will see a popup then click on create cart ID.</div>
          </div>
        </div>
        <div className="flex items-baseline gap-5">
          <div><span className="button-style bg-success">2</span></div>
          <div className="md:grid">
            <div className="font-bold text-lg">Click on cart ID</div>
            <div className="pt-2 text-slate-300">Click on 'Create Cart ID' to generate a unique code for your cart.</div>
          </div>
        </div>
        <button className="button-style my-5 bg-slate-700 text-slate-200">Learn more</button>
      </div>
    </div>
  )
}

export default SecondStep