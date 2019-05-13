import React from 'react';
import './UserOutput.css';

const userouput = (props) =>{
    return (
    <div>
        <p className="para1">First line user ouput {props.username}</p>
        <p className="para2">Secound line user ouput {props.username}</p>
    </div>
)};

export default userouput;