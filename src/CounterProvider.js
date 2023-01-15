import { useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children }) => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    const increment = amount => {
        setNumberOfClicks(numberOfClicks + incrementBy);
        
    };
    
    return (
        <CounterContext.Provider value={{ numberOfClicks, increment, incrementBy, setIncrementBy  }}>
        {children}
        </CounterContext.Provider>
    );
    };

