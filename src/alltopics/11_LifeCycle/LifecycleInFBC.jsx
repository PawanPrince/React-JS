import {useEffect, useRef, useState} from 'react'

const LifecycleInFBC = () => {

const [count, setCount] = useState(1);
let isInitialRender = useRef(true); 


useEffect(()=>{
    console.log("render");
    
})


    useEffect(()=>{
    console.log("component did mount");

    return()=>{
        console.log("will unmount component");
        
    }
     },[])



useEffect(()=>{

    if(isInitialRender.current){
        isInitialRender.current = false;
        return ()=>{
        console.log("previous state was: ", count);
        
    }
    }
    console.log("component did update");
    
    return ()=>{
        console.log("previous state was: ", count);
        
    }
    
},[count])

  return (
    <div>
        <h1>LifecycleInFBC {count}</h1>
        <button onClick={()=> setCount(count+1)}>Update count</button>
    </div>
  )
}

export default LifecycleInFBC