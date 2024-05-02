import faq from '../images/faq.svg';

const FifthSection = () => {
  return (
    <section data-theme="luxury" className="bg-secondary text-white py-10">
      <div className='align-element grid md:grid-cols-2'>
        <div className='grid justify-items-center gap-4 place-content-start'>
          <div className='text-3xl text-center font-bold'>Frquently Asked Questions</div>
          <img src={faq} alt="faqs" className=' rounded-md' />
        </div>
        <div className='py-10'>
          <div className='collapse collapse-plus bg-secondary'>
            <input type="checkbox" name='my-accordion-3' />
            <div className="collapse-title text-lg font-medium">
              What does ShopWise do?
            </div>
            <div className="collapse-content text-sm">
              <p>
                ShopWise helps thousands of people shop globally with unmatched speed. 
                It's global shopping, payments and delivery in just one system.
              </p>
            </div>
          </div>
          <hr />
          <div className='collapse collapse-plus bg-secondary'>
            <input type="checkbox" name='my-accordion-3' />
            <div className="collapse-title text-lg font-medium">
              What can ShopWise extension do?
            </div>
            <div className="collapse-content text-sm">
              <p>
                The ShopWise extension acts as your shopping gateway, allowing you to save desired items
                and generating a unique code for a seamless ShopWise platform shopping experience.
              </p>
            </div>
          </div>
          <hr />
          <div className='collapse collapse-plus bg-secondary'>
            <input type="checkbox" name='my-accordion-3' />
            <div className="collapse-title text-lg font-medium">
              What stores are covered by ShopWise?
            </div>
            <div className="collapse-content text-sm">
              <p>
                ShopWise's journey from humble beginnings with ASOS has evolved. We now embrace over 30 vendors,
                including the popular ShopWise for Amazon in Africa further delighting our users.
              </p>
            </div>
          </div>
          <hr />
          <div className='collapse collapse-plus bg-secondary'>
            <input type="checkbox" name='my-accordion-3' />
            <div className="collapse-title text-lg font-medium">
              How does ShopWise luxury shopping service work?
            </div>
            <div className="collapse-content text-sm">
              <p>
                Indulge in our personalized shopping, offering effortless access to global luxury brandx,
                in-store and online. Enjoy dedicated ShopWise assistance throughout your shopping experience.
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </section>
  )
}

export default FifthSection