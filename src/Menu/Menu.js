import React from 'react';
import './Menu.css'
import styled from 'styled-components';



const StyledDiv1 = styled.div`
text-align: right;
margin-top: none;
margin-right: 0px;
margin-left: 0px;
height: 55px;
background: white;
`


const BtnDiv = styled.div`
width: 15px;
display: inline-block;
`

const WhichDiv = styled.div`
width: 300px;
display: inline-block;
`
const UseDiv = styled.div`
width: 50px;
display: inline-block;
`


const Menu = (props) => {
  return (

    <StyledDiv1>
    <button className = "Which">CloudWhich.com</button>

    <WhichDiv></WhichDiv>
  <button>About</button>

  <BtnDiv></BtnDiv>
  <button>Contact</button>
  <BtnDiv></BtnDiv>
  <button>GitHub</button>
  <BtnDiv></BtnDiv>
  <button>Why CloudWhich?</button>
  <BtnDiv></BtnDiv>
  </StyledDiv1>

)
}


export default Menu;
