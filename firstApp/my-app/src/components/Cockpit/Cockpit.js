import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) =>{
    // using useEffect() in functional components
    useEffect(() =>{
        console.log('[Cockpit.js] useEffect');
        // Http request....
        setTimeout(()=>{
            alert('Save data to cloud');
        }, 1000);
        return () =>{
          console.log('[Cockpit.js] cleanup work in useEffect');
        }
      }, []);

      useEffect(() =>{
        console.log('[Cockpit.js] 2nd useEffect');
        return () =>{
          console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
      });

      // useEffect() as many times as needed

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPerson){
        btnClass = classes.Red; 
    }
    if(props.personsLength <= 2){
      assignedClasses.push(classes.red); // classes =['red']
    }
    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold); // classes =['red','bold']
    }

    return (
        <div className={classes.Cockpit}>        
            <h1>{props.title} </h1>
            <p className={assignedClasses.join(' ')}>This is realy working</p> 
            <button className={btnClass}
          // this way is slower for function calls
            onClick={props.clicked}>Switch Name</button>
        </div>
    );
};
        

// React.memo functional component 
// optimization
export default React.memo(cockpit);