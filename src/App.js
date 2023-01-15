import { RecoilRoot } from 'recoil';
import './App.css';
import { CounterButton } from './CounterButton';
import { DisplayCount } from './DisplayCount';

const App = () => {
  return (
 
    <RecoilRoot >
        <DisplayCount />
        <h1>State Management Example React App</h1>
        <CounterButton />
    </RecoilRoot>
  
  );
}

export default App;
