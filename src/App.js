import React,{ useState } from 'react';
import './App.css';

function App() {
const [counter,setCounter] = useState(1);

const increase = (value) => {
  setCounter(counter + value)
}
const decrease = (value) => {
  setCounter(counter - value)
}
const increment = (value) =>{
  setCounter(counter * value)
};
const decrement = (value) =>{
  setCounter(counter / value)

};


  return (
    <div className="App">
     <h1>Counter</h1>
     <h2 style={{color:`${ counter % 2 == 0 ? "green" : "red"}`}}>{counter}</h2>
     <button onClick={()=> increase(1)}>Increment</button>
     <button onClick={()=> decrease(1)}>decrement</button>
     <button onClick={() => increment(2)}>DOUBLE</button>
     <button onClick={() => decrement(2)}>DIVIDE</button>
    </div>
  );
}

export default App;
