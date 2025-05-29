import { useState } from "react";

const CounterInFbc = () => {
    let [count, setCount] = useState(0);


    let incre = () => setCount(count + 1);

     let decre = () => { 
        if(count > 0){
        setCount(count - 1);
       }else{
        // alert("Count is already 0");
       }
    }

     let res = () => {
        setCount(count * 0);
    }

    return (
        <div>
            <h1>Counter In Function Based Component</h1>
            <h1>Count: {count}</h1>     
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>
            <button onClick={res}>Reset</button>
        </div>
    );
};
export default CounterInFbc;