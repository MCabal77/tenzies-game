import React from "react";

function Die({ value, isHeld, toggleLock }) {
  return (
    <div
      className={`w-20 h-20 ${
        isHeld ? `bg-locked` : `bg-white`
      } flex items-center duration-300 justify-center rounded-xl shadow-lg`}
      onClick={toggleLock}
    >
      <p className=" font-extrabold text-2xl ">{value}</p>
    </div>
  );
}

export default Die;
