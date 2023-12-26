import {useEffect,useState} from "react"


function useCurrencyInfo(currency){
    const [data,setData]=useState({})//if no val get 
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        //api fetch
    .then((res)=> res.json())//data convert to json fromat
    .then((res)=>setData(res[currency]))
    console.log(data);
    }, [currency] )   //dependency: any chnge made  run this  
    console.log(data);
    return data;
}
export default useCurrencyInfo;

