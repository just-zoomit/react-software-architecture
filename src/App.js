import { Provider } from 'react-redux';
import { store } from './store';
import { CounterButton } from './CounterButton';
import './App.css';


const App = () => {
  return (
 
    <Provider store={store}>
        <h1>State Management Example React App</h1>
        <CounterButton />
    </Provider>
  
  );
}

export default App;
