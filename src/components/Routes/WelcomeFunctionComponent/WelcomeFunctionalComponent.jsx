import React from "react";
const WelcomeFunctionalCompopnent = (props) => 
{
    return (
    <React.Fragment>
        <h1>Hi this is {props.name} ,I am from {props.collegename}</h1>
        <h3>This is the first React File </h3>
        <h4>This Section contains the first React file using the functional component and props.
        </h4>
        </React.Fragment>
    )
}
export default WelcomeFunctionalCompopnent