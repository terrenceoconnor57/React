import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Cloud from './Cloud/Cloud';
import Recent from './Recent/Recent';
import Cloudwhich from './Cloudwhich/Cloudwhich';
import News from './News/News';


class App extends Component {
state = {
  links: [
    'https://aws.amazon.com/',
    'https://azure.microsoft.com/en-us/',
    'https://cloud.google.com/'


  ]
}







  render(){

  return (
    <div className="App">


    <Menu/>
    <Recent top  ='Recent Industry News'/>

    <News/>

    <Recent resource = 'Resources by Company:'/>
    <Cloud Amazon = {this.state.links[0]} Micro = {this.state.links[1]} Ggl = {this.state.links[2]} Aws = 'AWS'  Azure = 'Azure' Gcp = 'Google' />
    <br/>
    <Cloud Amazon = {this.state.links[0]} Micro = {this.state.links[1]} Ggl = {this.state.links[2]} Source = 'Storage' Aws = 'S3' Azure = 'Storage' Gcp = '?'/>
    <br/>
    <Cloud Amazon = {this.state.links[0]} Micro = {this.state.links[1]} Ggl = {this.state.links[2]} Source = 'Compute' Aws = 'EC2' Azure = 'VM' Gcp = '?'/>
    <br/>
    <Cloud Amazon = {this.state.links[0]} Micro = {this.state.links[1]} Ggl = {this.state.links[2]} Source = 'Networking' Aws = 'VPC' Azure = 'Vnet' Gcp = '?'/>
    <br/>
    <Cloud Amazon = {this.state.links[0]} Micro = {this.state.links[1]} Ggl = {this.state.links[2]} Source = 'Serverless' Aws = 'S3' Azure = 'Storage' Gcp = '?'/>
    <br/>
    <Cloud Amazon = {this.state.links[0]} Micro = {this.state.links[1]} Ggl = {this.state.links[2]} Source = 'Templates' Aws = 'S3' Azure = 'Storage' Gcp = '?'/>
    </div>




  );

}
}

export default App;
