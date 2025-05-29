import Child1 from './Child1';

const Parent1 = () => {

    let str = "Hello CHild 1";
    let user = {
        id:1,
        ename:"John",
    };

    let arr =[10,20,30,40];

    let products = [
        {
        id:1,
        name:"Iphone",
        price:1000,
   },
        { id:2,
        name:"Android",
        price:165000,
    },
        { id:3,
        name:"Mac",
        price:2000,
    },

    ];




    return (
        <div>
            <h1>Im Parent Function</h1>
            <Child1  data ={str} user = {user} arr ={0}  products ={products}/>
        </div>
        );
};
export default Parent1;