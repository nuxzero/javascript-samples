import React from 'react';
import './App.css';
import { add } from './services/calculator';

// eslint-disable-next-line func-names
const App = function () {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {add(1, 2)}
        </a>
      </header>
    </div>
  );
};

export default App;
