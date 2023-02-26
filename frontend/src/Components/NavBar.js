import React from "react";
import Logo from "../assets/YatraVeda.png";

export const NavBar = () => {
  return (
    <div className="bg-[#9E566F] h-20  flex flex-wrap items-center justify-between ">
      <img className=" inline mr-3 sm:h-20 cursor-pointer" src={Logo} alt="YatraVeda" />
      <span className="self-center text-5xl font-bold whitespace-nowrap text- dark:text-white cursor-pointer">
        YatraVeda
      </span>

      <div className='flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700"'>
        <a
          href="#"
          className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Login
        </a>

        <a
          href="#"
          className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

// export default NavBar
