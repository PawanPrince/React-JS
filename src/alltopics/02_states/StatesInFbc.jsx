import { useState } from "react";

const StatesInFbc = () => {



    let [state, setState] = useState("Add to cart");
    console.log(state);

    function cartbtn() {
    setState("Goto to cart");        
   
        

    }

    return (
        <div>
        <h1>States in Function Base Component</h1>
        <button onClick={cartbtn}>{state}</button>

        </div>
        );
        };
        export default StatesInFbc;



