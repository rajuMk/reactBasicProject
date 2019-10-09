import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1>my family members are {props.name} we are from Kakinada and she is {props.age} yeras old</h1>
            <p>{props.children}</p>
        </div>
    ) 
}

export default person;