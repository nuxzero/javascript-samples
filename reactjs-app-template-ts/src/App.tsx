import React from 'react';
// import './App.css';
import { add } from './services/calculator';
import SampleComponent from './components/SampleComponent';

const App = () => {
  return (
    <div className="App">
      {add(1, 1)}
      <SampleComponent />
    </div>
  );
};

export default App;
