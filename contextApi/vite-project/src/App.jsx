import { useContext } from 'react'
import './App.css'
import Counter from './components/Counter'
import { ConterContext } from './context/Counter'

function App() {
// useState bring state from conter context 
  const counterState=useContext(ConterContext);
  console.log("context",counterState);

  return (
    <div className='ap' >
    <h1>{counterState.name}</h1>
    <h1>Count:[{counterState.count}]</h1>
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
</div>
    )
}

export default App
