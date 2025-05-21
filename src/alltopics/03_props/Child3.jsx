const Child3 = (props) => {
console.log(props);



function sendDataToParent() {

    props.getData("Hello from Child 3");
    
}

    return(
        <div>
            <h1>
                Child 3 Component
            </h1>
            <button onClick={sendDataToParent}>Send Data</button>
        </div>
    );
};
export default Child3;