import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Radium from 'radium'

class App  extends Component {
    
  state = {
    persons : [
      {id:'1', name: 'Alex',age:26},
      {id:'2', name: 'Alexandru',age:29},
      {id:'3', name: 'Burghelea Alexandru', age:22}
    ],
    showPersons: false,
    otherState: 'some other value'
  };

    
    nameChangeHandler = (event,id)=>{
      
      const personIndex = this.state.persons.findIndex(p=>{
          return p.id === id;
      });
      
      const person = {
        ...this.state.persons[personIndex]
      };
      
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons:persons});
    };


    deletePersonHandler = (personIndex) =>{
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons:persons});
    }

    togglePersonHandler = (event) =>{
        let doesShow = this.state.showPersons;
        this.setState({
          showPersons: !doesShow
        });
    }
    

    render () {
      // inline style with
    const style ={
        backgroundColor :'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        ':hover':{
          backgroundColor:'lightgreen',
          color:'black'
        }
    };  

    let persons = null;

    if(this.state.showPersons){
        persons = (
          <div>
          {this.state.persons.map((person, index)=>{
            return <Person 
            click={()=>this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key ={person.id}
            changed={(event)=>this.nameChangeHandler(event,person.id)}
            />
          })
          }
          </div> 
        );

        style.backgroundColor ='red'; 
        style[':hover'] ={
          backgroundColor:'salmon',
          color:'black'
        }
      }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); // classes =['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); // classes =['red','bold']
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App </h1>
        <p className={classes.join(' ')}>This is realy working</p> 
        
        <button 
          style ={style}
          // this way is slower for function calls
          onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
      );
    }
}

export default Radium(App);



