import React from "react";
import { useNavigate } from "react-router-dom";
import street from "../assets/street.jpg";

export const PostCard3 = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/city");
  }
  return (
    <button onClick={handleClick}>
      <div class="flex flex-col cursor-pointer items-center bg-gray-800 border border-gray-700 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-700">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            George Town, Malaysia
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            George Town is the capital city of Penang state and located on the
            west coast of Malaysia. With the special influences of Europe and
            Asia, this city has a unique multicultural heritage that can be
            found at almost every corner. Due to its rich history, natural
            beauty, colonial architecture and traditional gastronomy, George
            Town was listed by UNESCO in 2008 as a “World Heritage Site”. If you
            are looking for a place to step back in history with a laid back
            vibe atmosphere while witnessing the most beautiful historic
            buildings, George Town should be on your travel bucket list.
          </p>
        </div>
      </div>
    </button>
  );
};
