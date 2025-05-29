import React, { Component } from 'react'

export default class LifecycleInCBC extends Component {

    constructor(props) {
        super(props);
        console.log(" constructor called");

        this.state = { count : 0 };

    }

    componentDidMount() {
        console.log(" component mount called");
        
    }
incerement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(" increment called");
}

componentDidUpdate(){
   console.log(" component Did Update called");
   
}

getSnapshotBeforeUpdate(prevProps, prevState) {

    console.log(" prevProps", prevState);
    return null;
}

  render() {
    console.log(" render called");
    return (
      <div>
        <h1>LifecycleInCBC {this.state.count}</h1>
        <button className='bg-amber-600 py-1 px-3' onClick={this.incerement}> Click</button>
      </div>
    )
  }
}
