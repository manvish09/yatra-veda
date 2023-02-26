import React, { useState } from "react";
import Logo from "../../assets/YatraVeda.png";
import { AddPost } from "../AddPost";
import { AddPhotos } from "../addphotos/AddPhotos";
import { useNavigate } from "react-router-dom";

function CityNav() {
  const [expmodal, setExpModal] = useState(false);
  const [photomodal, setPhotoModal] = useState(false);
  const toggleExpModal = () => {
    setExpModal(!expmodal);
  };
  const togglePhotoModal = () => {
    setPhotoModal(!photomodal);
  };
  const navigate = useNavigate();
  const routeHome = () => {
    navigate("/");
  };
  return (
    <div className="nav bg-[#9E566F] h-20  grid grid-cols-2 items-center justify-between ">
      <div className="logo cursor-pointer" onClick={routeHome} >
        <img className=" inline mr-3 sm:h-20" src={Logo} alt="YatraVeda"  />
        <span  className=" align-middle self-center text-5xl font-bold whitespace-nowrap items-center dark:text-white ">
          YatraVeda
        </span>
      </div>

      <div className="flex justify-evenly">
        <button
          onClick={toggleExpModal}
          className="block text-lg hover:text-slate-300 font-semibold"
        >
          Share Experience
        </button>
        {expmodal && (
          <div className="modal w-screen h-screen fixed t-0 l-0 b-0 r-0">
            <div
              className="overlay w-screen h-screen fixed t-0 l-0 b-0 r-0"
              onClick={toggleExpModal}
            ></div>
            <div className="modal-content">
              <AddPost />
            </div>
          </div>
        )}

        <button
          onClick={togglePhotoModal}
          className="block text-xl hover:text-slate-300 font-semibold"
        >
          Post Photo
        </button>
        {photomodal && (
          <div className="modal w-screen h-screen fixed t-0 l-0 b-0 r-0">
            <div
              className="overlay w-screen h-screen fixed t-0 l-0 b-0 r-0"
              onClick={togglePhotoModal}
            ></div>
            <div className="modal-content">
              <AddPhotos />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityNav;
