import React from 'react';


function Data(props) {
  return (
    <div className="App">
      <header className="App-header">                
        <h1>The Name You Entered is : {props.nam}</h1>
        <h1>The age You Entered is : {props.age}</h1>
        <h1>The gender You Entered is : {props.gen}</h1>
        <h1>The Number You Entered is : {props.number}</h1>
      </header>
    </div>
  );
}

export default Data;