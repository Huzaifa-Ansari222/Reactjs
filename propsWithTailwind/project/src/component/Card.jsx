// import React from 'react'

function Card(props) {
      const nameof=props.name;
      const about=props.p1;
      const about2=props.p2;
      const src=props.img;
      
  return (
  <div className=' bg-white text-black m-3 p-4 rounded-lg '>
    <h1 className=''>{nameof}</h1>
    <div className='flex flex-col '>
      <div className='flex items-center justify-center'><img src={src} alt="" className='h-[150px] w-[150px] '/></div>
      <div><p> {about} </p></div>
      <div><p>{about2}</p></div>
    </div>
  </div>
    )

}

export default Card