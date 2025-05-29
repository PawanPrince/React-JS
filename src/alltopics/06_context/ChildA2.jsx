import { useContext } from "react"     //    accepts the context object and returns the value passed to the provider
import { myStore } from "./MyContext";

const ChildA2 = () => {
//  Step 3 : consuming the data
    let data = useContext(myStore); 
    console.log(data);
    
  return (
    <div>
        
        <h1>ChildA2 {data} </h1>
    
    </div>
  )
}

export default ChildA2;