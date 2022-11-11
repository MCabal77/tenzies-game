import React from "react";
import Die from "./Die";

function GameContainer() {
  return (
    <div className="bg-game h-full w-full rounded-lg p-20 flex flex-col items-center">
      {/* Header | Info*/}
      <h1 className="text-primary font-bold text-5xl">Tenzies</h1>
      <h3 className="text-secondary font-inter font-normal text-2xl">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h3>
      {/* Container for dice */}
      <div className="p-16 flex gap-10">
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
      </div>
      {/* Button */}
    </div>
  );
}

export default GameContainer;
