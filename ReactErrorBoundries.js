/*Error Boundaries are a feature in React that allows components to catch JavaScript errors anywhere in their tree of child components and log those errors,
display a fallback UI, or take any other appropriate action*/

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // This method is called when an error occurs in the components inside ErrorBoundary
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    // Log the error details to the console (you can customize this part)
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render a friendly error message when an error occurs
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    // Render the child components as usual
    return this.props.children;
  }
}

// Example component that may throw an error
class YourComponent extends Component {
  render() {
    // Simulate an error for demonstration purposes
    throw new Error('This is a simulated error in YourComponent.');
    
    // Render your actual component content here
    return <div>Your Component Content</div>;
  }
}

// Wrap YourComponent with ErrorBoundary to catch and handle errors
function App() {
  return (
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>
  );
}

export default App;
