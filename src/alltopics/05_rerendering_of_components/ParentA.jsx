import React, { useState } from 'react'
import ChildA from './ChildA'

 const ParentA = ()=>{

    console.log("ParentA");
    

    const [add,setAdd] = useState(0);
    const update = () => setAdd(add+1);
          return (
    <div><h1>ParentA - {add}</h1>
    <button onClick={update}>Update</button>
    <ChildA/>
    </div>
  )
}

export default ParentA;