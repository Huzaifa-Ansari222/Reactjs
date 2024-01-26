// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';

export const Card = (props) => {
    // const year=props.years;
    // const month=props.months;
    // const day=props.days;
    // const titleProp = props.titles; // Renamed constant

    // eslint-disable-next-line react/prop-types
    const { year, month, day,title:propTitle } = props;
    const [title,setTitle]=useState(propTitle);

    function clickHandler(){
        setTitle("item added to card");
    }
return (
    <div style={{ display:"flex" ,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <br />
        <div style={{width:"40%",height:"",background:"white" , display:"flex" ,flexDirection:"column", justifyContent:"center", alignItems:"center",border:"1px solid gray" ,backgroundColor:"lightblue",padding:"20px" }}>
            <h4>{year}</h4>
            <h4>{month}</h4>
            <h3>{day}</h3>
            <div>
            <h2>{title}</h2>
        </div>
        <button onClick={clickHandler}>add to card</button>
        
        <br /> <hr />
        </div>
    
    </div >
)
}
