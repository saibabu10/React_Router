import React, { Component } from 'react'

export default class YoutubeClass extends Component {

    constructor() {
      super()
    
      this.state = {
         greetingMessage:'Welcome to this channel',
         buttonName:"Subscribe"
        
      }
    }
    clickEventHandler= () =>
    {
        this.setState({
            greetingMessage:'Thanks for subscribing',
            buttonName:"Unsubscribe"
        })
    }
  render() {
    return (
      <React.Fragment>
        <h1>This section contains a youtube subcription button where the user click the buttonnit automatically changes from "Welcome to this Channel" to "Thank for Subscribing</h1>
        <h1>{this.state.greetingMessage}</h1>
        <button onClick={this.clickEventHandler}>
            {this.state.buttonName}</button>
      </React.Fragment>
    )
  }
}
