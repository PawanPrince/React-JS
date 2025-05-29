const Child2B = (props) => {

    console.log(props);

    let {str, arr, obj} = props.data;

    
    return (
        <div>
            <h1>Child 2B Components</h1>
            
            
            
            <h2>String: {str } {arr} {obj}</h2>

        </div>
    );
};
export default Child2B;