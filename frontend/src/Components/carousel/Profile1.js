import React from "react";
import profile from "../../assets/user.png";
const Profile1 = () => {
  return (
    <div>
      <div class="w-full max-w-xs bg-slate-300 border border-gray-200 rounded-lg shadow ">
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-28 h-28 bg-red-400 my-1 rounded-full shadow-lg"
            src={profile}
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
          <span class="text-sm text-gray-500 ">Visual Designer</span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 "
            >
              Add friend
            </a>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 "
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
