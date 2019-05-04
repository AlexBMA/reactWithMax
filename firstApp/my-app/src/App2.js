import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'

const app  = prompt => {
    const [personsState, setPersonState] = useState({
      persons : [
        {name: 'Alex',age:26},
        {name: 'Alexandru',age:29},
        {name: 'Burghelea Alexandru', age:22}
      ],
      otherState: 'some other value'    
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
      //console.log('was clicked');
      //DON''T DO THIS: this.state.persons[0].name='Alexandru Burghelea';
      // if you use react hooks you have replace
      setPersonState({
        persons:[
        {name:'Alexandru Burghelea', age:26},
        {name:'Alex',age:27},
        {name: 'Burghelea Alexandru Marian', age:21}
      ]
    });
    };

    return (
      <div className="App">
        <h1>Hi I'm a React App </h1>
        <p>This is realy working</p> 
        <button onClick={switchNameHandler} >Switch Name</button>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}/> 
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}/> 
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age} >My Hobbies: Reading</Person>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now'),'I\'m a React App!!');
}

export default app;


/*
state = {
  persons : [
    {name: 'Alex',age:26},
    {name: 'Alexandru',age:29},
    {name: 'Burghelea Alexandru', age:22}
  ],
  otherState: 'some other value'
};
*/

