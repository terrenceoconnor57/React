import React from 'react';
import './Menu.css'
import styled from 'styled-components';




const StyledDiv1 = styled.div`
text-align: right;
height: 50px;
margin-top: 0px;
margin-right: 0px;
border-radius: 10px;
padding: 10px;
`


const BtnDiv = styled.div`
width: 15px;
display: inline-block;
`

const Menu = (props) => {
  return (

    <StyledDiv1>
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
