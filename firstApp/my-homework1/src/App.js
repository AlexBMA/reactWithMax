import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';
class App extends Component {

  state = {
    username: 'Alex Burghelea'
  };

  nameChangeHandler = (event)=>{
    this.setState({
      username: event.target.value
    })
  };

  render() {
    return (
      <div className="App">
        <br/>

        <UserInput change ={this.nameChangeHandler} name={this.state.username}>

        </UserInput>
        <UserOutput username={this.state.username}>

        </UserOutput>
      </div>
    );
  }
}

export default App;
