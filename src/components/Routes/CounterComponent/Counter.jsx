import React from "react";
import './CounterComponent.css';
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
        <h1 className="main">Counter App</h1>
        <h3 className="content">This is the counter web app which is used to count the number range starts from 0 to n 
            <br/>
            This is also used to count the numbers in reverse order
            <br/>
            By clicking the button Increment it start to increase the value from 0.
            <br/>
            The Decrement Button also works fine with 0.
        </h3>
        <button className="button" onClick={incrementalFunction}>Increment</button>
    
        <button className="button" onClick={decrementalFunction}>Decrement</button>
        <h1 className="counter"><div>{counterVariable}</div></h1>
        </React.Fragment>
    )
}
export default Counter