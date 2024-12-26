import { useState } from 'react';
import './App.css';
import Keypad from './keypad';

function App() {
  let [input, setInput] = useState('')

  const handleClick = (value) => {
    setInput(input + value)
  }

  const calculate = () => {
    let output = eval(input)
    setInput(output)
  }

  const clearClick = () => {
    setInput('')
  }
  return (
    <div className='container'>
    <h1>Calculator App Using React</h1>
      <div className='calculator'>
        <input className='output' value={input} type='text' />
        <Keypad handleClick = {handleClick} calculate = {calculate} clearClick = {clearClick} />
      </div>
    </div>
  );
}

export default App;
