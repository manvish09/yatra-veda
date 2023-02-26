import React from "react";
import { useNavigate } from "react-router-dom";
import street from "../assets/street.jpg";

export const PostCard1 = ({ name, desc }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/city");
  }
  return (
    <button onClick={handleClick}>
      <div class="flex flex-col cursor-pointer items-center bg-gray-800 border border-gray-700 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-700">
        {/* <img
          class="object-fill m-1 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={street}
          alt=""
        /> */}
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hyderabad, India
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            The Pearl City, Hyderabad with its unmatched blend of history with
            modernity, hypnotizes everyone who sets his/her foot in this
            beautiful city. With a history as old as 400 years, Hyderabad
            promises a unique refreshing experience to all. Join us as we
            explore some of the incredible places to visit in Hyderabad.From
            historical monuments to natural getaways to mouth-watering world
            famous cuisine to appealing shopping places to thrilling
            entertainment parks, this city has it all to keep you glued.
          </p>
        </div>
      </div>
    </button>
  );
};
