import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App  extends Component {
    
  state = {
    persons : [
      {name: 'Alex',age:26},
      {name: 'Alexandru',age:29},
      {name: 'Burghelea Alexandru', age:22}
    ],
    otherState: 'some other value'
  };

    switchNameHandler = (newName) => {
      //console.log('was clicked');
      //DON''T DO THIS: this.state.persons[0].name='Alexandru Burghelea';
      // if you use react hooks you have replace
      this.setState({
        persons:[
        {name: newName, age:26},
        {name:'Alex',age:27},
        {name: 'Burghelea Alexandru Marian', age:21}
      ]
    });
    };

    nameChangeHandler = (event)=>{
      this.setState({
        persons : [
          {name: 'Alex',age:26},
          {name: event.target.value, age:29},
          {name: 'Burghelea Alexandru', age:22}
        ],
        otherState: 'some other value'
      });
    };

    render () {
      // inline style 
    const style ={
        backgroudColor :'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
    };  

    return (
      <div className="App">
        <h1>Hi I'm a React App </h1>
        <p>This is realy working</p> 
        
        <button 
          style ={style}
          // this way is slower for function calls
          onClick={() => this.switchNameHandler("Alexandru Burghelea")} >Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/> 
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/> 
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          // this way is faster for function calls
          click={this.switchNameHandler.bind(this, "Alex!")}
          changed ={this.nameChangeHandler}>
          My Hobbies: Reading</Person>
      </div>
      );
    }
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now'),'I\'m a React App!!');
}

export default App;



