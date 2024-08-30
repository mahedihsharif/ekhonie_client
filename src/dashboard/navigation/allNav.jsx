import { AiFillDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiFillDashboard />,
    path: "/my-account",
  },
  {
    id: 2,
    title: "Orders",
    icon: <AiOutlineShoppingCart />,
    path: "/my-account/orders",
  },
  {
    id: 3,
    title: "Address",
    icon: <BiCategory />,
    path: "/my-account/address",
  },
  {
    id: 4,
    title: "Account Details",
    icon: <FiUsers />,
    path: "/my-account/account-details",
  },
  {
    id: 5,
    title: "Logout",
    icon: <FiUsers />,
    path: "/my-account/logout",
  },
];
