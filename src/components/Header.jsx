import { useState,useContext } from "react";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link} from "react-scroll";
import profileImage from "../assets/my_icon.jpg";
const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "Service", link: "services" },
    { name: "Spare Parts", link: "projects" },
    { name: "About", link: "about" }, 
    { name: "Contact us", link: "contact" },
  ];
  let [open, setOpen] = useState(false);
  // const {theme,switchTheme} = useContext(ThemeContext)
  return (
    <div className={`w-full bg-dark left-0 right-0 z-10`}>
      <div className="flex md:flex items-center justify-between py-4 md:px-10 px-2">
        {/* logo section */}
        <div className="order-first font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src={profileImage} alt="Profile Picture" className="text-white rounded-full w-12 h-12 mr-1 border-1"/>
          <span className="text-white">NEXTPARTS</span>
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className={`text-white hover:text-primary cursor-pointer duration-500`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
