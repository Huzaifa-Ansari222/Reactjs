import React,{useContext} from 'react'
import { ConterContext } from '../context/Counter'
function Counter() {
    const counterContext=useContext(ConterContext);

    return (
    <>
    <div>
    <button 
    onClick ={()=>counterContext.setCount(counterContext.count+1)} 
    >PLUS +</button>
    <button
    onClick ={()=>counterContext.setCount(counterContext.count-1)} 
    >MINUS -</button></div>
    </>
)
}

export default Counter;