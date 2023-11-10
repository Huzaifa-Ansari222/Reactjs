import { useState } from 'react'//hook come from here
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(0)//pass any thing //to chnge state /ui/dom

const addValue=()=>{
  if(counter<10){
  setCounter(counter+1) 
  } 
  }

const removeValue=()=>{
  if(counter>0){
    setCounter(counter-1) 
    } 
  }

const remove=()=>{
  setCounter(counter=0)  
  }

  return (
    <>
      <h1>Counter</h1>
      <h3>counter value : {counter}</h3>
      <button onClick={addValue} > add value +1</button>
      <br /> <br />
      <button onClick={removeValue}>remove value -1</button><br /><br />
      <button onClick={remove}>Remove all</button>
    </>
  )
}

export default App
