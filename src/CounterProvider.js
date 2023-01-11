import { useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children }) => {
    const [numberOfClicks, setCount] = useState(0);

    const increment = amount => {
        setCount(numberOfClicks + 1);
    };
    
    return (
        <CounterContext.Provider value={{ numberOfClicks, increment }}>
        {children}
        </CounterContext.Provider>
    );
    };

