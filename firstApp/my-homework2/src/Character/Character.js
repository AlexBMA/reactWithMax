import React from 'react';

const character = (props) =>{

    const style ={
       display:'inline-block',
       padding: '16px',
       border: '1px solid black'
    };  

    return (
        <span style={style}>{props.letter}</span>
    )};

export default character;