// import Navbar from "./components/Navbar";
// import Fbc from "./alltopics/01_typesofcomponent/Fbc";
// import Cbc from "./alltopics/01_typesofcomponent/Cbc";
// import StatesInFbc from "./alltopics/02_states/StatesInFbc";
// import CounterInFbc from './alltopics/02_states/CounterInFbc';
// import StatesInCbc from './alltopics/02_states/StatesInCbc';
// import Parent1 from "./alltopics/03_props/Parent1";
// import Parent2 from "./alltopics/03_props/Parent2";
// import Parent3 from "./alltopics/03_props/Parent3";
// import ParentA from './alltopics/05_rerendering_of_components/ParentA';
// import ParentA1 from "./alltopics/06_context/ParentA1";
// import MyContext from "./alltopics/06_context/MyContext";
// import ParentComponent from './alltopics/07_context2/ParentComponent';
// import Context2 from "./alltopics/07_context2/Context2";
// import InlineCSS from "./alltopics/08_reactCSS/InlineCSS";
// import Cart from "./alltopics/07_context2/Cart";
// import Card from "./alltopics/08_reactCSS/Card";
// import ControlledForms1 from "./alltopics/09_ControlledForms/ControlledForms1";
// // import TodoWrapper from "./Task1/TodoWrapper";
// import UncontrolledForms from "./alltopics/10_UncontrolledForms/UncontrolledForms";
// import LifecycleInCBC from './alltopics/11_LifeCycle/LifecycleInCBC';
// import { useState } from "react";
// import LifecycleInFBC from './alltopics/11_LifeCycle/LifecycleInFBC';
// import FetchApi from "./alltopics/12_fetch/FetchApi";
// import FetchApi2 from "./alltopics/12_fetch/FetchApi2";
// import Reducer from "./alltopics/13_useReducer/Reducer";
// import MyComponent from "./alltopics/14_memo-and-callback/MyComponent";
// import MyNavbar from "./alltopics/15_browserRouter/MyNavbar";
// import Routing1 from "./alltopics/15_browserRouter/Routing1";
// import Routing2 from "./alltopics/16_createBrowserRouter/Routing2";


// const App = () => {

//   const [toggle, setToggle] = useState(false);
//   function toggleButton() {
//     setToggle(!toggle);
//   }
//   return (
//     <div>
//       {/* <Navbar/> */}
//       {/* <Fbc/> */}
//       {/* <Cbc/> */}

//       {/* <StatesInFbc/> */}
//       {/* <CounterInFbc/> */}

//       {/* <StatesInCbc/> */}

//       {/* <Parent1/> */}
//       {/* <Parent2/> */}

//       {/* <Parent3/> */}

//       {/* <ParentA/> */}

//       {/* <ParentA1/> */}
//       {/* <MyContext/> */}

//       {/* <Context2>
        
//         <ParentComponent/>
//       <Cart/>
//       </Context2> */}

//       {/* <InlineCSS/> */}

//       {/* <Card/> */}

//       {/* <ControlledForms1/> */}

//       {/* <TodoWrapper/> */}
//        {/* <UncontrolledForms/> */}

//        {/* <button onClick={toggleButton} className="bg-amber-500  py-1 px-3" >Toggle Button Component</button>

//       {toggle?  <LifecycleInCBC/> : <h1> No Component</h1>} */}


//       {/* <LifecycleInFBC/> */}


//       {/* <FetchApi/> */}

      
// {/* 
//       <button onClick={toggleButton} className="bg-red-500 mb-3">toggle</button>
//       {toggle ? <FetchApi2/> :<h1>No Component</h1> } */}

//       {/* <Reducer/> */}


//       {/* <MyComponent/> */}

//     {/* <Routing1/> */}

//     <Routing2/>












      

//       </div>
//       );
//     };
//       export default App;

//!  Lay code for the App component

import Routing2 from "./alltopics/16_createBrowserRouter/Routing2"

const App = () => {
  return (
    <div>
       <Routing2/>
       
       </div>
  )
}

export default App;