/*In an uncontrolled component, the form element maintains its own state. React does not control or manage the state of the form element. 
Instead, you rely on the DOM to handle the state.
Uncontrolled components are often used when integrating React with non-React code or when you prefer to delegate the state management to the DOM*/import './App.css';
import UnControlled from './Components/Controlled';

function App() {
  return (
    <div className="App">
      <UnControlled/>
    </div>
  );
}

export default App;
