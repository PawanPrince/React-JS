//!------ Default Export 
// Default export is used when we want to export a single value or function from a module.
function add(n1, n2){
    
    return n1+n2;
}

export default add;


//!-----  Named Export 



function greet(){
    console.log("Hello World");
    
}

// Named export is used when we want to export multiple values or functions from a module.
const multiply = (n1,n2)=> n1*n2


function useState(val){
    return[val,()=>{}]
}

export {multiply,greet,useState};
greet();
console.log(useState());

// let [state, setState] = useState()   // we can use this also if don't pass args.
let [state, setState] = useState("Hello");

console.log(state);
