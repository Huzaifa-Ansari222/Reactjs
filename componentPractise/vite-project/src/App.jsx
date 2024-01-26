import Hero from './components/hero'
import './App.css'
import { useState } from 'react'


function App() {
  const [value,setvalue]=useState(0);

function inc(){
  if(value<10){
    setvalue(value+1)

  }
}
function dec(){
  // setvalue(value-1)  
  if (value>0) {
    setvalue(value - 1);
  }
  }
  return (

    <>
    <Hero>
    </Hero>
    <div className='btn-container'>
    <button className='btn' onClick={dec}>-</button>
    <button className='btn'><b className='bold'>{value}</b></button>
    <button className='btn' onClick={inc}>+</button>
    </div>
    </>
  )
}

export default App
