//!-----> default Import 
// Default import is used when we want to import a single value or function from a module.
import add from "./functions.js";


//!-----> Named Import
// Named import is used when we want to import multiple values or functions from a module.
import {multiply} from "./functions.js";


console.log(add(10,20));
console.log(multiply(5,2));

