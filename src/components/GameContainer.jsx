import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

import { getRandomInt } from "../utils/functions";
import Die from "./Die";

function GameContainer() {
  // State for game win
  const [tenzies, setTenzies] = useState(false);

  const getNewDie = function () {
    return {
      value: getRandomInt(1, 6),
      isHeld: false,
      id: nanoid(),
    };
  };

  const allNewDice = function () {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(getNewDie());
    }
    return arr;
  };

  const [allDice, setAllDice] = useState(allNewDice());

  useEffect(() => {
    let allHeld = allDice.every((die) => die.isHeld);
    let checkValue = allDice[0].value;
    let allSame = allDice.every((die) => die.value === checkValue);
    if (allHeld && allSame) {
      setTenzies(true);
      console.log('You won!');
    }
  }, [allDice]);

  const reRoll = function () {
    setAllDice((oldDice) =>
      oldDice.map((currentDie) => {
        return !currentDie.isHeld ? getNewDie() : currentDie;
      })
    );
  };

  const holdDice = function (id) {
    setAllDice((oldDice) =>
      oldDice.map((currentDie) => {
        return currentDie.id === id
          ? {
              ...currentDie,
              isHeld: !currentDie.isHeld,
            }
          : currentDie;
      })
    );
  };

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
        {allDice.map((element) => (
          <Die
            key={element.id}
            value={element.value}
            isHeld={element.isHeld}
            toggleLock={() => {
              holdDice(element.id);
            }}
          />
        ))}
      </div>
      {/* Button */}
      <button
        className="bg-button text-white w-44 h-16 rounded-lg font-bold text-2xl transition duration-300 hover:cursor-pointer hover:scale-95 hover:bg-blue-500"
        onClick={reRoll}
      >
        {tenzies ? 'You Won!' : 'Roll'}
      </button>
    </div>
  );
}

export default GameContainer;
