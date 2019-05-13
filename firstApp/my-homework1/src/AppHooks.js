import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';


const app = prompt =>{

  const [userState,setUserState] = useState({
      username : 'This is the username'
  });

  const nameChangeHandler = (event)=>{
    setUserState({
      username: event.target.value
  });
  };


  return (
    <div className="App">
      <br/>

      <UserInput change ={nameChangeHandler} name={userState.username}>

      </UserInput>
      <UserOutput username={userState.username}>

      </UserOutput>

      <UserOutput username={userState.username}>

      </UserOutput>
    </div>
  );
}



/*
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

        <UserOutput username={this.state.username}>

        </UserOutput>
      </div>
    );
  }
}*/

export default app;
