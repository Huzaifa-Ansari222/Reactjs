import { useState } from "react";

function App() {
const [color,setColor]=useState("black")

    return (
    <div className="w-full h-screen duration-200 "style={{backgroundColor:color}}>

    <div className=' bg-white h-[60px] w-[90%] flex items-center justify-center justify-evenly rounded-full m-auto absolute  inset-x-12 bottom-12' >
    
    <button onClick={()=>setColor("rgb(220 38 38)")} className="w-[10%] h-[80%] bg-red-600 text-white rounded-full" >Red</button>
    <button onClick={()=>setColor("rgb(234 88 12)")}  className="w-[10%] h-[80%] bg-orange-600 text-white rounded-full">Orange</button>
    <button onClick={()=>setColor("rgb(202 138 4)")}  className="w-[10%] h-[80%] bg-yellow-600	 text-white rounded-full">Yellow</button>
    <button onClick={()=>setColor("rgb(101 163 13)")}  className="w-[10%] h-[80%] bg-lime-600 text-white rounded-full">Lime</button>
    <button onClick={()=>setColor("rgb(22 163 74)")}  className="w-[10%] h-[80%] bg-green-600 text-white rounded-full">Green</button>
    <button onClick={()=>setColor(" rgb(8 145 178)")}  className="w-[10%] h-[80%] bg-cyan-600	 text-white rounded-full">Cyan</button>
    <button onClick={()=>setColor("rgb(79 70 229)")}  className="w-[10%] h-[80%] bg-indigo-600	 text-white rounded-full">Indigo</button>
    <button onClick={()=>setColor("rgb(192 38 211)")}  className="w-[10%] h-[80%] bg-fuchsia-600 text-white rounded-full">Purple</button>


    </div>
    </div>
    )
}
export default App
