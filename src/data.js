import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { SlPrinter } from "react-icons/sl";

export const TopBarData = [
  "Special offer: Buy 2 products and get 1 free",
  "Special offer: Buy 2 products and get 1 free",
  "Special offer: Buy 2 products and get 1 free",
  "Special offer: Buy 2 products and get 1 free",
  "Special offer: Buy 2 products and get 1 free",
  "Special offer: Buy 2 products and get 1 free",
];

export const FooterTopData = [
  {
    id: 1,
    icon: FaShippingFast,
    title: "Fast Delivery",
    desc: "Across NewYork City",
  },
  {
    id: 2,
    icon: SlPrinter,
    title: "safe payment",
    desc: "100% Secure Payment",
  },
  {
    id: 3,
    icon: RiDiscountPercentLine,
    title: "Online Discount",
    desc: "Add Multi-buy Discount",
  },
  {
    id: 4,
    icon: BsReverseLayoutTextWindowReverse,
    title: "Help Center",
    desc: "Dedicated 24/7 Support",
  },
  {
    id: 5,
    icon: MdOutlineEventNote,
    title: "Curated items",
    desc: "From Handpicked Sellers",
  },
];

export const FooterBottomData = [
  {
    id: 1,
    title: "About The Store",
    desc: "Got Question? Call us 24/7",
    call: "+222-1800-262",
    address: "268 St, South New York/NY 98944, United States",
  },
  {
    id: 2,
    title: "Infomation",
    desc: "You have not selected the footer menu",
  },
  {
    id: 3,
    title: "Quick Links",
    desc: "Got Question? Call us 24/7",
  },
  {
    id: 4,
    title: "Newsletter Signup",
    desc: "Join 20.000+ subscribers and get a new discount coupon on every Saturday. Updates information on Sales and Offers.",
  },
];

//Carousel data items
export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
