import React from 'react';

const userinput = (props) =>{
    return (
    <input type="text" onChange={props.change} value={props.name}/>
)};

export default userinput;