import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Data.js';
import Data from './Data.js';
function App() {
  var Name = prompt("Enter Your Name");
  var Age = prompt("Enter Your Age");
  var Gender = prompt("Enter Your Gender");
  const num =  prompt("Enter Your Number");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <Data nam={Name} age = {Age} gen = {Gender} number = {num} />
        
      </header>
    </div>
  );
}

export default App;
