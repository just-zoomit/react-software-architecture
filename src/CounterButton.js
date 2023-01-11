import { useState } from "react";

export const CounterButton = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [increment, setIncrement] = useState(1);

  return (
    <>
    <p> You have clicked the button {numberOfClicks} </p>
    <label>
    Increment By: 
    <input 
    value={increment} 
    onChange={(e) => setIncrement(Number(e.target.value))}
    type="number" 
     />
   
    </label>

    <button onClick={() => setNumberOfClicks(numberOfClicks + increment)}>
      Clicked 
    </button>
    </>
  );
}