import React from 'react';

const character = (props) =>{

    const style ={
       display:'inline-block',
       padding: '16px',
       border: '1px solid black'
    };  

    return (
        <span style={style} onClick={props.click}>{props.letter} # {props.index}</span>
    )};

export default character;