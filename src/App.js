import './App.css';
import { CounterButton } from './CounterButton';
import { CounterProvider } from './CounterProvider';


const App = () => {
  return (
 
    <CounterProvider>
        <h1>State Management Example React App</h1>
        <CounterButton />
    </CounterProvider>
  
  );
}

export default App;
