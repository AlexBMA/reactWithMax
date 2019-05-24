import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation.js'
import Character from './Character/Character.js'

class App extends Component {

  state={
    text:"",
    length:0,
    showValidation:false,
    validationText:"",
    showLetterList:false
  };

  updateTextParagraph = (event) =>{
    const stateCopy = {...this.state}
    stateCopy.text = event.target.value;
    stateCopy.length = stateCopy.text.length;
    if(stateCopy.length>10 || stateCopy.length<5) {
      stateCopy.showValidation = true;
      stateCopy.showLetterList = true;
      if(stateCopy.length >10) stateCopy.validationText ="too long";
      if(stateCopy.length<5) stateCopy.validationText ="too short";
    }
    else { 
      stateCopy.showValidation = false;
      stateCopy.showLetterList = false;
    }
    
    
    this.setState(stateCopy);

  }


  render(){

    let showValidationParagraph = null;

    if(this.state.showValidation){
      showValidationParagraph = (
        <Validation text={this.state.validationText}/>
      );
    }

    let showLetterList =  null;
    if(this.state.showLetterList){

     const letters = [...this.state.text]

      showLetterList = (
        <div>
        {letters.map((letter,index) => {
            return <Character letter={letter}/>
        })
        } 
        </div>
      );
    }

    return(
      <div className="App">
      <h1>Homework 2</h1>
      <input type="text" onChange={this.updateTextParagraph}/>
      <p>Result is here: {this.state.text}</p>
      {showValidationParagraph}
      <br/>
      {showLetterList}
    </div>
    );
  }
}

export default App;
