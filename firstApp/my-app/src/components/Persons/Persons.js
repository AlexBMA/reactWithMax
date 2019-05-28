import React, {PureComponent} from 'react';
import Person from './Person/Person';

//PureComponent checks for changes to any prop 
// of the component 

class Persons extends PureComponent{

    static getDereivedStateFroProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    /*
    //update lifecycle component
    // optimization of class component
    shouldComponentUpvdate(nextProps, nextState){
        // true if react should be updating
        // false if react should not be updating
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons!==this.persons.persons){
            return true;
        }else{
            return false;
        }
    }
    */

    //update lifecycle component
    getSnapshotBeforeUpdate(prevPros, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    //update lifecycle component 
    // most used
    componentDidUpdate(prevPros,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render (){
        console.log('[Persons.js] redering...');
    return (
        this.props.persons.map((person, index)=>{
            return <Person 
                click={()=>this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                key ={person.id}
                changed={(event)=>this.props.changed(event,person.id)}
              />
          })
        );
    }
}

export default Persons;