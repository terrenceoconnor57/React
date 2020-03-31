import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Cloud from './Cloud/Cloud';
import Recent from './Recent/Recent';
import Cloudwhich from './Cloudwhich/Cloudwhich';
import News from './News/News';


class App extends Component {


  





  render(){

  return (
    <div className="App">
    <Menu/>
    <Recent top  ='Recent Industry News'/>

    <News/>

    <Recent resource = 'Resources by Company:'/>
    <Cloud Aws ='AWS' Azure = 'Azure' Gcp = 'Google'/>
    <br/>
    <Cloud Aws = 'S3' Azure = 'Storage' Gcp = '?'/>
    <br/>
    <Cloud Aws = 'EC2' Azure = 'VM' Gcp = '?'/>
    <br/>
    <Cloud Aws = 'VPC' Azure = 'Vnet' Gcp = '?'/>
    <br/>
    <Cloud Aws = 'S3' Azure = 'Storage' Gcp = '?'/>
    <br/>
    <Cloud Aws = 'S3' Azure = 'Storage' Gcp = '?'/>
    </div>




  );

}
}

export default App;
