import React,{useState} from 'react';
import './App.css';
import Button from './Button';
import FizzBuzz from './FizzBuzz';

function App() {
  const [number, setNumber] = useState(1)
  return (
    <div className="App">
      <h1>React FizzBuzz App</h1>
      <FizzBuzz number={number} />
      <Button number={number} setNumber={setNumber} />
    </div>
  );
}

export default App;
