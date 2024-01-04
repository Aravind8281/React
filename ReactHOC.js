/*
Higher Order Component is a function that takes a component and returns a new component with additional features, behaviors, or props. 
It's a powerful pattern in React used for code reusability, composition, and maintaining a clean and modular code structure */
import React from 'react';

// Higher Order Component
const withLogging = (WrappedComponent) => {
  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted.`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is about to unmount.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogging;
};

// Sample Component
const MyComponent = (props) => {
  return <div>{props.message}</div>;
};

// Using the HOC
const MyComponentWithLogging = withLogging(MyComponent);

// Using the Component with added logging
const App = () => {
  return <MyComponentWithLogging message="Hello, World!" />;
};

export default App;
