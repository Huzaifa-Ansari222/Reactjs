// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'

export const Product = () => {
    //pass signle single event handler
    const [title,setTitle]=useState('');
    const[date,setDate]=useState('');

    function titleChangeHandler (event) {
        setTitle(event.target.value)//hold input data
        // console.log(event.target.value)
    }
    function DateHandler (event) {
    setDate(event.target.value)//hold input data
    // console.log(event.target.value)
    // console.log(date)//sheducle not chnge on spot
    }

    function submitHandler(event){
        event.preventDefault();//
        const objData ={
        myTitle : title,//give input data of title and date here
        myDate : date
        };
        console.log(objData);
        setDate('');//empty date
        setTitle('');//empty title
    }
    //pass multiple handler using object

    
return (
    <form onSubmit={submitHandler}>
        <div style={{ background:"red",height:"100px",width:"100%",}}>
            <label htmlFor="titile">TITLE</label>
            <input type="text" value={title} onChange={titleChangeHandler} />
            <br />
            <label htmlFor="date" >Date</label> 
            <input type="date" value={date} onChange={DateHandler}/>
            <br />
            <button type='submit' >submit</button>
        </div>
    </form>
)
}
