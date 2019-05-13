import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';
class App extends Component {

  state = {
    username: 'Alex Burghelea'
  };

  render() {
    return (
      <div className="App">
        <br/>

        <UserInput>

        </UserInput>
        <UserOutput username={this.state.username}>

        </UserOutput>
      </div>
    );
  }
}

export default App;
