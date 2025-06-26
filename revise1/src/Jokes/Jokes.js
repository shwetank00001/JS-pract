import React, { useState } from 'react';
// Keep the state and logic inside the child component (Jokes).
// Imagine you want a "Show/Hide Age" button for each individual joke. When you click the button on one joke, it should not affect any of the others.
// In this case, each Jokes component should manage its own "is the age visible?" state.
export default function Jokes(props){

    const [value, showValue] = useState(false);

    function showData(){
        showValue(item => !item)
    }

    return (
        <>
            <h1>{props.title}</h1>
            {value && <h3>{props.age}</h3>}
            <button onClick={showData}>Show Age</button>
            {/* <button onClick={()=> {}}>Del</button> */}
        </>
    )
}