import React, { Component } from 'react';
import ChickenHeight from './chickenheight';
import ChickenColor from './chickencolor';

class ChickenFinder extends Component {
  constructor(props){
    super(props);
    this.state = {
    	height: null,
    	color: null,
    }
    this.handleChildClick = this.handleChildClick.bind(this);
    this.resetChicken = this.resetChicken.bind(this);
  }
  handleChildClick( componentName, value){
    console.log('child was clicked');
    console.log(`setting ${componentName} to ${value}`)
    this.setState({
      [componentName]: value
    })
  }
  resetChicken(){
    this.setState({
      height: null,
      color: null
    })
  }
  render() {

    if(this.state.height===null){
      return (<ChickenHeight callback={this.handleChildClick}/>)
    } else if(this.state.color===null){
      return (<ChickenColor callback={this.handleChildClick}/>)
    } else {
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