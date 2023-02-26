import React from "react";
import { useNavigate } from "react-router-dom";
import couch from "../../assets/couchsurfing-logo.png";

export default function GetSurfer() {
  const navigate = useNavigate();
  const getSurfer = () => {
    navigate("/surfers");
  };

  return (
    <div className="button text-center">
      <button
        onClick={getSurfer}
        type="button"
        class="text-gray-900 bg-[#b66783] hover:bg-[#d07c99] border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold rounded-lg text-lg px-5 py-1.5 text-center inline-flex items-center  mr-2 my-2"
      >
        <img src={couch} className="w-12 mr-2 -ml-1" alt="couchsurfing" />
        Connect with CouchSurfers
      </button>
    </div>
  );
}
