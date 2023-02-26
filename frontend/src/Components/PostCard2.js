import React from "react";
import { useNavigate } from "react-router-dom";
import street from "../assets/street.jpg";

export const PostCard2 = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/city");
  }
  return (
    <button onClick={handleClick}>
      <div class="flex flex-col cursor-pointer items-center bg-gray-800 border border-gray-700 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-700">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Siem Reap, Cambodia
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Siem Reap is the gateway to the impressive Angkor Wat which is a
            Buddhist temple complex and also known as a UNESCO World Heritage
            Site. Beyond Angkor Wat in Cambodia, Siem Reap will offer you many
            interesting activities and ample attractions such as French colonial
            architecture, the floating villages on Tonle Sap River, vibrant
            night market and sacred waterfalls. With its rich culture, tasty
            traditional cuisine, friendly people and the highlight Angkor Wat
            complex, Siem Reap is a jewel of Southeast Asia
          </p>
        </div>
      </div>
    </button>
  );
};
