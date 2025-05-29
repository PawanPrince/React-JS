const Child2 = (props) => {

    console.log(props);

    let {prop1, prop2, prop3} = props;
    console.log(prop1);
    console.log(prop2);
    console.log(prop3);
    
    

    return (
        <div>
        <h2>This is child 2 Component</h2>
        </div>
    );
}
export default Child2;