import { useState } from "react";
import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export const CounterButton = () => {
  const { numberOfClicks, increment} = useContext(CounterContext);

  return (
    <>
    <p> You have clicked the button {numberOfClicks} </p>
    {/* <label>
    Increment By: 
    <input 
    value={increment} 
    onChange={(e) => setIncrement(Number(e.target.value))}
    type="number" 
     />
   
    </label> */}

    <button onClick={() =>  increment()}>
      Clicked 
    </button>
    </>
  );
}