import React, { useContext } from 'react'
import { GLOBAL_CONTEXT } from './Context2'

const ChildBCommponent = () => {

    let val = useContext(GLOBAL_CONTEXT)
    console.log(val);
    
  return (
    <div>
        <h1>ChildBCommponent- {val}</h1>
    </div>
  )
}

export default ChildBCommponent;