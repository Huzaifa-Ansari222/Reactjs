import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
const [length,setLength]=useState(8);
const [numberAllowed,setNumberAllowed]=useState(false);
const [charAllowed,setCharAllowed]=useState (false);
const [password,setPassword]=useState("");

//useRef hook 
const passwordRef=useRef(null)


  const passwordGenerator =useCallback(()=>{
    let pass=''
    let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if(numberAllowed) str +='0123456789'
    if(charAllowed) str +=' !@#$%^&*()-_=[]{}|?/ '

    for (let i = 1; i <=length; i++){
    let char = Math.floor(Math.random()*str.length+1)//give char
    pass +=str.charAt(char)
  }
  setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard =useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  }, [password])

  //any change made this re-run again
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
    <div className='w-full h-[150px] max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8  text-center bg-gray-700 flex flex-col  justify-center'>

      <h1 className='text-white'>Password Generator</h1>

      <div className='flex mt-2 shadow rounded-lg overflow-hidden mb-4'>
      
      <input type="text" 
      value={password}
      className='outline-none w-full py-1 px-3 flex '
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-500
      text-white px-3 py-0.5 shrink-0 hover:bg-blue-700'
      >Copy</button>

      </div>

        <div className='flex text-sm gap-x-2'>
            
            <div className='flex items-center gap-x-1 '>
            <input type="range" min={8} max={30} value={length}
            className='cursor-pointer '
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className='text-white'>Length:{length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);//true/false
            }} 
            />
            <label htmlFor="numberInput" className='text-white'>Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{
              setCharAllowed((prev)=>!prev);//true/false |false/true
            }} 
            />
            <label htmlFor="charInput" className='text-white'>charchater</label>
            </div>

        </div>
    </div>
  </>
  )
}

export default App
