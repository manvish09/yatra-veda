import React from "react";
import Profile1 from "./Profile1";
import Profile2 from "./Profile2";
import Profile3 from "./Profile3";
import Profile4 from "./Profile4";
import Profile5 from "./Profile5";
import CarouselNav from "./CarouselNav";
export const Carousel = () => {
  return (
    <div className="">
      <CarouselNav />
      <div className=" w-2/3 m-auto p-2 bg-[#9e566f] border-2 rounded-xl">
        <h3 className="text-3xl px-3 font-semibold">Couch Surfers</h3>
        <div className="profiles gap-5 grid grid-cols-3 p-3">
          <Profile1 />
          <Profile2 />
          <Profile3 />
          <Profile4 />
          <Profile5 />
        </div>
      </div>
    </div>
  );
};
