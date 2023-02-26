import React from "react";
import Logo from "../../assets/YatraVeda.png";
import { useNavigate } from "react-router-dom";

const CarouselNav = () => {
  const navigate = useNavigate();
  const routeHome = () => {
    navigate("/");
  };
  return (
    <div onClick={routeHome} className="bg-[#9E566F] h-20  flex flex-wrap items-center justify-start ">
      <img className=" inline mr-3 sm:h-20 cursor-pointer" src={Logo} alt="YatraVeda" />
      <span className="self-center text-5xl font-bold whitespace-nowrap text- dark:text-white cursor-pointer">
        YatraVeda
      </span>

      
    </div>
  );
};

export default CarouselNav
