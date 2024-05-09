import { TbCopyright } from "react-icons/tb"

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white p-10">
        <div className="font-bold text-3xl">ShopWise</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 py-5">
          <div className="py-4">
            <div className="font-semibold">Platform</div>
            <div>Supported Stores</div>
            <div>Luxury Shopping</div>
            <div>Gift Cards</div>
          </div>
          <div className="py-4">
            <div className="font-semibold">Getting Started</div>
            <div>How To Guide</div>
            <div>Get Plugins</div>
            <div>Pricing</div>
          </div>
          <div className="py-4">
            <div className="font-semibold">Why ShopWise</div>
            <div>About Us</div>
            <div>Compare Competitors</div>
          </div>
          <div className="py-4">
            <div className="font-semibold">Support</div>
            <div>Contact Support</div>
            <div>Feedback</div>
            <div>FAQs</div>
          </div>
          <div className="py-4">
            <div className="font-semibold">Legal</div>
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
            <div>Cookie Settings</div>
          </div>
          <div className="py-4">
            <div className="font-semibold">Contact</div>
            <div>Discord</div>
            <div>Twitter</div>
            <div>YouTube</div>
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-3 pt-5">
          <TbCopyright /> Copyright 1986. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer