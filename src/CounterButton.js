import { useContext, useState} from "react";
import { CounterContext } from "./CounterContext";

export const CounterButton = () => {
  const { numberOfClicks, increment } = useContext(CounterContext);
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
    <p> You have clicked the button {numberOfClicks} </p>
    <label>
    Increment By: 
    <input 
    value={incrementBy} 
    onChange={(e) => setIncrementBy(Number(e.target.value))}
    type="number" 
     />
   
    </label>

    <button onClick={() =>  increment(incrementBy)}>
      Clicked 
    </button>
    </>
  );
}