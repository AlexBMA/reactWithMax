import React, {Component} from 'react';
import Person from './Person/Person'


class Persons extends Component{

    static getDereivedStateFroProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    //update lifecycle component
    shouldComponentUpvdate(nextProps, nextState){
        // true if react should be updating
        // false if react should not be updating
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    //update lifecycle component
    getSnapshotBeforeUpdate(prevPros, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    //update lifecycle component
    componentDidUpdate(prevPros,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
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