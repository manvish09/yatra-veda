import React from "react";
import { useNavigate } from "react-router-dom";
import street from "../assets/street.jpg";

export const PostCard4 = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/city");
  }
  return (
    <button onClick={handleClick}>
      <div class="flex flex-col cursor-pointer items-center bg-gray-800 border border-gray-700 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-700">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Vigan, The Philippines
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Whenever referring to the Philippines, a few things will immediately
            spring to everyone’s mind: countless white sandy beaches, delicious
            fruit, luxury shopping malls, thousands of inhabited and uninhabited
            islands. However, not many people know that the Philippines also
            owns a charming city with a colonial atmosphere which offers you a
            feeling like travelling back in time - Vigan city. This UNESCO World
            Heritage Site is situated in Ilocos Sur province, and this city
            features well-preserved Spanish-era architecture with many
            colonial-era merchant houses & Baroque churches. Aside from its
            historical significance, a holiday to Vigan can also be packed with
            a memorable cuisine adventure where you can feast on signature
            Ilocano food.
          </p>
        </div>
      </div>
    </button>
  );
};
