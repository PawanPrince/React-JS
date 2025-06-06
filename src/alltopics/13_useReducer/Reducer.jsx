import React, { useReducer } from 'react'

let initialState =0;
function reducerfunc(prevState, action){
    switch (action) {
        case "increment":

       return prevState + 1;

       case "dec":

      if(prevState > 0){
         return prevState -1;
      }

       case "reset":

       return prevState *0;
    }
}

const Reducer = () => {

    let [state , dispatch] = useReducer(reducerfunc , initialState);
    console.log(state);
    
  return (
    <div>
        <h1>Reducer {state}</h1>

<button 
  onClick={() => dispatch("increment")} className="bg-green-500 text-white py-1 px-3 mx-3" >
  Increment
</button>
{/* <br /> */}

<button 
  onClick={() => dispatch("dec")} className='bg-red-600 text-white py-1 px-3 mx-3' >
  Decrement
</button>
{/* <br /> */}

<button 
  onClick={ () => dispatch("reset") }  className='bg-blue-500 text-white py-1 px-3 mx-3'  >
  Reset
</button>

    </div>
  )
}

export default Reducer;