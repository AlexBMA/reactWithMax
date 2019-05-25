import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App  extends Component {

  //creation lifecycle component
  constructor(props){
    super(props);
    console.log("[App.js] constructor");

    this.state = {
      persons : [
        {id:'1', name: 'Alex',age:26},
        {id:'2', name: 'Alexandru',age:29},
        {id:'3', name: 'Burghelea Alexandru', age:22}
      ],
      showPersons: false,
      otherState: 'some other value',
      showCockpit:true
    };
  }

  //creation lifecycle component
  static getDerivedStateFromProps(props,state){
    console.log('[App.js] get state',props);
    return state;
  }

    //creation lifecycle component
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  // update lifecycle component state
  shouldComponentUpdate(nexProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  // update lifecycle component state
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
    
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

    //creation lifecycle component
    render () {
    console.log('[App.js] render');
    let persons = null;
    if(this.state.showPersons){
        persons = (
          <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangeHandler} /> 
        );
    }

    return (
      <div className={classes.App}>
      <button 
      onClick={()=>{
        this.setState({showCockpit:false})}}>
        Remove Cockpit
        </button>
        {this.state.showCockpit ?<Cockpit 
        title = {this.props.appTitle}
        showPersons ={this.state.showPersons}
          persons={this.state.persons}
          clicked ={this.togglePersonHandler}
        />:null}
        {persons}
      </div>
      );
    }
}

export default App;



