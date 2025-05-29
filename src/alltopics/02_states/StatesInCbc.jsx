import { Component } from "react";

class StatesInCbc extends Component{
    state ={count: 1};
    increment = () => {
this.setState({count: this.state.count + 1});

    }
    // Decrement 
    decrement = () => {
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1});
        }else{

        }
    }
    // reset
    reset = () => {
this.setState({count: this.state.count * 0});

    }

    render(){
      console.log(this);
      

        return(
            <div>
                <h1>States in Class baased</h1>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
                </div>
        )
    }
}

export default StatesInCbc;