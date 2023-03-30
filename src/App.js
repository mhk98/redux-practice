import logo from './logo.svg';
import './App.css';
import Child from './pages/Child';
import Parent from './pages/Parent';
import { createContext, useState } from 'react';
import ShortForm from './pages/ShortForm';
import Counter from './pages/Counter';


export const COUNTER_CONTEXT = createContext()

function App() {
  const [count, setCount] = useState(0)

  const value = { count, setCount }

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="App">
        <Counter></Counter>
        {/* <Parent></Parent>
        <Child></Child>
        <ShortForm></ShortForm> */}
      </div>
    </COUNTER_CONTEXT.Provider>

  );
}

export default App;
