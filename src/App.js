import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Cloud from './Cloud/Cloud';
import Recent from './Recent/Recent';
import Cloudwhich from './Cloudwhich/Cloudwhich';



class App extends Component {








  render(){

  return (
    <div className="App">
    <Menu/>
    <Recent/>
    <Cloud/>
    </div>




  );

}
}

export default App;
