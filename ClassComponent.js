import React, { Component } from "react";
class Functional extends Component{
    constructor(props){
        super(props);
        this.state={
            count:1
        }
        this.handleclick=this.handleclick.bind(this);
    }
    handleclick(){
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        console.log(this.state.count)
    }
    render(){
        return(
            <div>
                Class Component
                <button onClick={this.handleclick}>Click</button>
            </div>
        )
    }
}
export default Functional;
