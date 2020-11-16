import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Results from './components/Results/Results';

function App() {
  return (
    <div id="wrapper" className="container">
      <Header />
      <Results />
    </div>
  );
}

export default App;
