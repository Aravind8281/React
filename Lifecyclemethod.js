import React, { Component } from "react";
class Functional extends Component{
    constructor(props){
        super(props);
        this.state={
            count:1
        }
        this.handleclick=this.handleclick.bind(this);
    }
    componentDidMount(){
        console.log("Component Mount");
    }
    handleclick(){
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        console.log(this.state.count)
    }
    componentDidUpdate(){
        console.log("Component Updated")
    }
    componentWillUnmount(){
        console.log("Component Unmount")
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


/*
componentDidMount:

Definition: This method is called after a component has been rendered to the DOM.
Use Case: It is commonly used to initiate network requests, fetch data, or perform any setup that requires access to the DOM.

componentDidUpdate:

Definition: This method is called after the component updates, either due to changes in props or state.
Use Case: It is useful for performing side effects after a component updates, such as fetching new data based on changes in props or state.

componentWillUnmount:

Definition: This method is invoked just before a component is removed from the DOM.
Use Case: It is often used to clean up resources, such as cancelling network requests, clearing timers, or unsubscribing from external events to prevent memory leaks.

componentDidCatch:

Definition: This method is part of the Error Boundary API and is called when an error occurs during rendering, in a lifecycle method, or in the constructor of any child component.
Use Case: It is used to catch JavaScript errors anywhere in a component tree and log those errors, displaying a fallback UI instead of crashing the entire component tree.
*/
