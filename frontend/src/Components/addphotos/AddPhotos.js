import React from "react";
import Hashtags from "./Hashtags";
export const AddPhotos = () => {
  return (
    <div className="w-1/3 border bg-[#b96683] p-4 rounded-xl m-auto ">
      <h2 className="text-xl font-semibold underline">Share A Photo</h2>
      <form action="#" className="w-full">
        <div className="user-name mt-2">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            placeholder="John Doe"
            required
          />
        </div>
        <div className="file-input mt-2">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            for="large_size"
          >
            Large file input
          </label>
          <input
            class="block p-1 w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            id="large_size"
            type="file"
          />
        </div>

        <Hashtags />
        <div className="instagram mt-2">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Instagram:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="John Doe"
            required
          />
        </div>
        <div className="facebook mt-2">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Facebook:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="John Doe"
            required
          />
        </div>
      </form>
    </div>
  );
};
