import React from "react";

function Die({ value }) {
  return (
    <div className=" w-20 h-20 bg-white flex items-center justify-center rounded-md shadow-lg">
      <p className=" font-bold text-xl ">{value}</p>
    </div>
  );
}

export default Die;
