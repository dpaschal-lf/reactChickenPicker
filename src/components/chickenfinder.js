import React, { Component } from 'react';
import ChickenHeight from './chickenheight';
import ChickenColor from './chickencolor';

class ChickenFinder extends Component {
  constructor(props){
    super(props);
    this.state = { //store the values we need in this parent component
    	height: null,
    	color: null,
    }
    //bind out click handlers and resethandlers so we don't lose "this"
    this.handleChildClick = this.handleChildClick.bind(this);
    this.resetChicken = this.resetChicken.bind(this);
  }
  //this function is called by its children via a callback
  handleChildClick( componentName, value){
    console.log('child was clicked');
    console.log(`setting ${componentName} to ${value}`)
    this.setState({
      [componentName]: value //the [componentName] lets you programmatically select a property name
    })
    /*you also could have made the object like this
    const obj = {};
    obj[componentName] = value;
    this.setState(obj);
    */
  }
  resetChicken(){
    this.setState({
      height: null,
      color: null
    })
    //change everything back to blank
  }
  render() {

    if(this.state.height===null){//if the first value is null, render the component to ask for the first value
      return (<ChickenHeight callback={this.handleChildClick}/>) //pass the click handler to the child component
    } else if(this.state.color===null){ //if the second value is null, render the component to ask fo the second value
      return (<ChickenColor callback={this.handleChildClick}/>) 
    } else {
      //we have all the pieces we need.  render something to show it.
      //if you didn't need to render something, but wanted to call another function, you could a check in the componentDidUpdate lifecycle method
      return (
      <div>
        <div>You have made a {this.state.height} {this.state.color} chicken</div>
        <div onClick={this.resetChicken}>Reset chicken</div>
      </div>
      )
    }
  }
}

export default ChickenFinder;