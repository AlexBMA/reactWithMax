import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App </h1>
        <p>This is realy working</p> 
        <Person name="Alex" age="26"/> 
        <Person name="Alexandru" age="26"/> 
        <Person name="Burghelea Alexandru" age="26" >My Hobbies: Reading</Person>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now'),'I\'m a React App!!');
  }
}

export default App;
