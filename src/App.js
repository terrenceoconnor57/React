import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Cloud from './Cloud/Cloud';


class App extends Component {
  render(){

  return (
    <div className="App">
    <Menu/>
    <br></br>
    <br></br>
    <Cloud/>
    </div>




  );

}
}

export default App;
