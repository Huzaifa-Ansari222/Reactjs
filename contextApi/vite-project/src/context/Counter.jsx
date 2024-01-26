//import ceatecontext method
import {createContext,useState} from "react";

//export & initilize context method to ConterContext
export  const ConterContext=createContext(null);


// make context provider to wrap 
export const CounterProvider =(props)=>{
    const [count,setCount]=useState(0);//this state can be used from by any component
   
    return( 
    <ConterContext.Provider value={{count ,setCount,name:'Huzz'}}>
        {props.children}
    </ConterContext.Provider>
);
};
// export ConterContext;