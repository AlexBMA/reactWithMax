import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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
    

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){
        persons = (
          <div>
          {this.state.persons.map((person, index)=>{
            return <ErrorBoundary key ={person.id}>
              <Person 
                click={()=>this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                changed={(event)=>this.nameChangeHandler(event,person.id)}
              />
            </ErrorBoundary>
            
          })
          }
          </div> 
        );

        btnClass = classes.Red;  
      }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); // classes =['red']
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); // classes =['red','bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi I'm a React App </h1>
        <p className={assignedClasses.join(' ')}>This is realy working</p> 
        
        <button className={btnClass}
          // this way is slower for function calls
          onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
      );
    }
}

export default App;


