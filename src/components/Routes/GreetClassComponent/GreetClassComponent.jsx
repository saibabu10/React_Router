import React,{Component} from 'react';
class GreetClassComponent extends Component
{
    render()
    {
        return <h1> Hi {this.props.name} Hello From Class Component</h1>
    }
}
export default GreetClassComponent