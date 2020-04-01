import React from 'react';
import './Cloudmenu.css'
import styled from 'styled-components';



const BtnDiv = styled.div`
width: 30px;
display: inline-block;
`


const Cloudmenu = (props) => {
  return (

<div>

<button className = 'none'>{props.Source}</button>
    <BtnDiv></BtnDiv>
  <button className = 'Ama'>AWS</button>
  <BtnDiv></BtnDiv>
  <button className = 'Azur'>Azure</button>
  <BtnDiv></BtnDiv>
  <button className = 'Goo'>Google</button>
  <BtnDiv></BtnDiv>
</div>

)
}


export default Cloudmenu;
