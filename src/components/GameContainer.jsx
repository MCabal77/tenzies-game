import React from "react";
import { useState } from "react";

import { getRandomInt } from "../utils/functions";
import Die from "./Die";

function GameContainer() {
  const allNewDice = function () {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(getRandomInt(1, 6));
    }
    return arr;
  };

  const [allDice, setAllDice] = useState(allNewDice);

  return (
    // Game container
    <div className="bg-game h-full w-full rounded-lg p-20 flex flex-col justify-center items-center">
      {/* Header | Info*/}
      <h1 className="text-primary font-bold text-5xl">Tenzies</h1>
      <h3 className="text-secondary font-inter font-normal text-2xl">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h3>
      {/* Container for dice */}
      <div className="p-16 grid gap-10 grid-cols-5">
        {allDice.map((element, index) => (
          <Die key={index + 1} value={element} />
        ))}
      </div>
      {/* Button */}
      <button className="bg-button text-white w-44 h-16 rounded-lg font-bold text-2xl">
        Roll
      </button>
    </div>
  );
}

export default GameContainer;
