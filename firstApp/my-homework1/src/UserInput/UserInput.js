import React from 'react';
import './UserInput.css';

const userinput = (props) =>{
    return (
    <input type="text" onChange={props.change} value={props.name} className="inputText"/>
)};

export default userinput;