import {useCallback, useState} from 'react'
import { useMemo } from 'react';
import ChildX from './ChildX';

const MyComponent = () => {

    const [add,setAdd] = useState(0);
    const [minus,setSub] = useState(100);

    function multiply(){
        console.log("Multiply function called");
        return add* 5;
    }

    // useMemo is used to memoize the result of a function value
let memoriedValue = useMemo(() => {
    console.log("useMemo called");
        return add* 5;
},[add])

//function for child

//  function display(){
//     console.log("Display function for child props");  
//  }

// it returns memoized function 
 
 let display = useCallback(()=>{
    console.log("Display function for child props");  
 },[])



  return (
    <div>

        <h1>MyComponent</h1>
        <h2>Addition :  {add}</h2>
        <button className='bg-green-500 ' onClick={()=> setAdd(add+1)}> Add</button>

        <h2>Substraction :  {minus}</h2>
        <button className='bg-red-500 ' onClick={()=> setSub(minus-1)}>
            Minus
        </button>

        <h2>Multiply  : {memoriedValue}</h2>
        <ChildX display={display}/>

    </div>
  )
}

export default MyComponent