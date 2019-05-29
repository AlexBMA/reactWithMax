import React from 'react'

const withClass2 = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);


export default withClass2;