import { useContext, useState} from "react";
import { CounterContext } from "./CounterContext";

import { useRecoilState,useRecoilValue } from "recoil";
import { counterState } from "./counterState";
import { incrementByState } from "./incrementByState";

import { numberOfClicks } from "./numberOfClicks";

export const CounterButton = () => {
  const numberOfClicksValue= useRecoilValue(numberOfClicks);
  const [clicksData, setClicksData] = useRecoilState(counterState);

  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

  

  return (
    <>
    <p> You have clicked the button {numberOfClicksValue} </p>
    <label>
    Increment By: 
    <input 
    value={incrementBy} 
    onChange={(e) => setIncrementBy(Number(e.target.value))}
    type="number" 
     />
   
    </label>
    <button onClick={() =>  setClicksData([...clicksData,{timestamp: Date.now(), amount: incrementBy}])}>
      Clicked 
    </button>

    </>
  );
}