import React from "react";
import { useState } from "react";
const Counter = () =>
{
const [counterVariable, setCounter]=useState(0);
const incrementalFunction = () =>
{
    setCounter(counterVariable+1);
}
const decrementalFunction = () => 
{
    setCounter(counterVariable-1);
    // console.log(counterVariable);
}
 return (
        <React.Fragment>
        <h1>Counter App</h1>

        <button onClick={incrementalFunction}>Increment</button>
       
        <button onClick={decrementalFunction}>Decrement</button>
        <div>{counterVariable}</div>
        </React.Fragment>
    )
}
export default Counter