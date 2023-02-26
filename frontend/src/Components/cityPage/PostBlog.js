import React from "react";
import About from "./About";
import Review_1 from "./Review_1";
import Review_2 from "./Review_2";
import Review_3 from "./Review_3";
import Review_4 from "./Review_4";
import CityNav from "./CityNav";
export const PostBlog = () => {
  return (
    <div>
      <div className="nav w-full">
        <CityNav />
      </div>
      <div className="content w-11/12 m-auto">
        <div className="about">
          <About />
        </div>
        <hr />
        <div className="reviews grid grid-cols-3">
          <Review_1 />
          <Review_2 />
          <Review_3 />
          <Review_4 />
        </div>
      </div>
    </div>
  );
};
