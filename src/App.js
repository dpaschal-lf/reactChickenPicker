import React, { Component } from 'react';
import './App.css';
import ChickenFinder from './components/chickenfinder'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="App">
      	<ChickenFinder />
      </div>
    );
  }
}

export default App;










