import { RecoilRoot } from 'recoil';
import './App.css';
import { CounterButton } from './CounterButton';

const App = () => {
  return (
 
    <RecoilRoot >
        <h1>State Management Example React App</h1>
        <CounterButton />
    </RecoilRoot>
  
  );
}

export default App;
