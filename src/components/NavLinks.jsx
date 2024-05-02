import { useState } from "react";
import LinkItems from "./LinkItems";
import { FcBriefcase, FcMoneyTransfer, FcOnlineSupport, FcPaid, FcSportsMode } from 'react-icons/fc'

const links = [
  { 
    id: 1, 
    text: 'Platform',
    title: 'Shop Globally', 
    icon: <FcPaid size={25} />,
    subLink: ['Supported stores on the extension', 'Luxury shopping', 'Giftcards'], 
    sub: ['Available stores', 'Omnichannel personal shopping', 'Coming soon'] 
  },
  { 
    id: 2, 
    text: 'Getting Started',
    title: 'Startup', 
    icon: <FcSportsMode size={25} />,
    subLink: ['How to guide', 'Get plugins'], 
    sub: ['Getting started on the right foot', 'Installing the latest extension']
  },
  { 
    id: 3, 
    text: 'Why ShopWise', 
    title: 'Advantages',
    icon: <FcBriefcase size={25} />, 
    subLink: ['About us', 'Compare competitors'], 
    sub: ["Everything yu'd want to know", 'Why choose ShopWise']
  },
  { 
    id: 4, 
    text: 'Pricing', 
    title: 'Pricing plans',
    icon: <FcMoneyTransfer size={25} />, 
    subLink: ['Pricing guides'], 
    sub: ['Getting the best deals']
  },
  { 
    id: 5, 
    text: 'Support',
    title: 'Product Help', 
    icon: <FcOnlineSupport size={25} />,
    subLink: ['Support', 'Feedback', 'FAQs'], 
    sub: ['Contact support', 'Give us your feedback to help us improve', 'Frequently asked questions'] 
  },
];

const NavLinks = () => {
  const [hoveredLinkId, setHoveredLinkId] = useState(null);

  return (
    <div className="dropdown dropdown-hover">
      <ul className="flex gap-7 bg-base-100 button-style">
        {links.map((link) => {
          const { id, text } = link;
          return (
            <li 
              key={id} 
              className="cursor-pointer"
              onMouseEnter={() => setHoveredLinkId(id)}
              onMouseLeave={() => setHoveredLinkId(null)}  
            >
              {text}
            </li>
          )
        })}
      </ul>
      {hoveredLinkId && <LinkItems link={links.find(link => link.id === hoveredLinkId)} />}
    </div>
  )
}

export default NavLinks