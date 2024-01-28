import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 h-[120px] rounded dark:bg-gray-800">
      <div className="container flex flex-nowrap justify-between  h-full items-center mx-auto">
        <div className="flex lg:w-[250px] w-[150px] h-full items-center justify-center bg-[url('https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/CompanyLogo.png')] bg-contain bg-no-repeat bg-center ">

      
          {/* <img alt="Logo" width={'100%'} height={'100%'} className="object-cover  sm:h-9" src={'https://raw.githubusercontent.com/sreenath256/Helah/master/src/assets/CompanyLogo.png'} /> */}
          
        </div>
        <div className=" flex md:order-2 ">
          <div className="hidden md:flex ">

          <SearchIcon className="text-gray-700" />
          <HeartIcon className="text-gray-700 ml-4" />
          <UserIcon className="text-gray-700 ml-4" />
          <ShoppingBagIcon className="text-gray-700 ml-4" />
          </div>
          <button
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            data-collapse-toggle="mobile-menu-2"
            type="button"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-normal">
            <li>
              <a
                aria-current="page"
                className="block py-2  pr-4 pl-3 text-xl text-[#2C2C2C] rounded md:bg-transparent md:p-0 dark:text-white"
                href="#"
              >
                <Link to='/'>
                Home
                </Link>
              </a>
            </li>
            <li>
              <a
                className="block py-2 pr-4 pl-3  text-xl text-[#2C2C2C] rounded md:bg-transparent md:p-0 dark:text-white"
                href="#"
              >
                <Link to='/collection'>

                Collections
                </Link>
              </a>
            </li>
            <li>
              <a
                className="block py-2 pr-4 pl-3  text-xl text-[#2C2C2C] rounded md:bg-transparent md:p-0 dark:text-white"
                href="#"
              >
                <Link to='about'>

                About Us
                </Link>
              </a>
            </li>
            <li>
              <a
                className="block py-2 pr-4 pl-3 text-xl text-[#2C2C2C] rounded md:bg-transparent md:p-0 dark:text-white"
                href="#"
              >
                <Link to='/contact'>

                Contact Us
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default  Navbar 

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingBagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
