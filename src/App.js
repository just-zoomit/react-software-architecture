import { CounterButton } from './CounterButton';
import { Counter } from './Counter';
import './App.css';

const counter = new Counter();

const App = () => {
  return (
    <>
 
    
        <h1>State Management Example React App</h1>
        <CounterButton counter={counter} />
        </>
  
  );
}

export default App;
