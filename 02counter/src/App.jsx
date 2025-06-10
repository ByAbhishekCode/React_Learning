import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  const addValue = ()=>{
    if(counter>=10)
    {
      alert("bhai 10gi  se jada ho rha hai")
    }
    else{
    setCounter((counter+=1))
    setCounter((counter += 1));
    setCounter((counter += 1));
    setCounter((counter += 1));
  }
  }
  const removeValue = ()=>{
    if(counter == 0){ alert("bhai km hai 0 se")}
    else
    {
      setCounter(counter-=1)
    }
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>counter value: {counter} </h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
