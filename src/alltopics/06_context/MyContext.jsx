import { createContext } from "react";
import ParentA1 from "./ParentA1";

// Step - 1 : creating a global store
export let myStore = createContext();     // whenever we call it returns a context object. 

const MyContext = () => {

    let data = "Hello World";
    console.log(myStore);
    



  return (
    <div>
        {/* Step - 2 : creating a provider */}

        <myStore.Provider value={data}>
            <ParentA1/>
        </myStore.Provider>


    </div>
  )
}

export default MyContext;