import React from "react";
import { useNavigate } from "react-router-dom";
import street from "../assets/street.jpg";

export const PostCard5 = ({ name, desc }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/city");
  }
  return (
    <button onClick={handleClick}>
      <div class="flex flex-col cursor-pointer items-center bg-gray-800 border border-gray-700 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-700">
        
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Varanasi, India
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Varanasi is one of the cultural gems of the country. It has an
            elaborate history and high importance in Hindu mythology. It is one
            of the oldest inhabited cities in the world. With numerous religious
            places and the coming together of devotees from across the world,
            the city makes for a colourful experience. The Ganga Aarti at the
            Dashashwamedh Ghat is an awe-inspiring ceremony held every day.
            Besides, a boat ride through the waters of Ganges during sunrise is
            an experience that cannot be missed. Make sure you explore the
            Golden Triangle with Varanasi tours.
          </p>
        </div>
      </div>
    </button>
  );
};
