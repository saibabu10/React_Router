import React,{Component} from 'react';
class GreetClassComponent extends Component
{
    render()
    {
        return<React.Fragment> <h1> My name is  {this.props.name} Hello From Class Component</h1>
        <h3>
            This is the Class component file with using "this." to call the props from the App.js file.
        </h3>
        </React.Fragment>

    }
}
export default GreetClassComponent