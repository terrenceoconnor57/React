import React from 'react';
import './Menu.css'
import styled from 'styled-components';

import { injectGlobal } from 'styled-components';



const StyledDiv1 = styled.div`
background: grey;
text-align: center;
height: 50px;
margin: 10px;
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
  <button>Button 1</button>
  <BtnDiv></BtnDiv>
  <button>Button 2</button>
  <BtnDiv></BtnDiv>
  <button>Button 3</button>
  <BtnDiv></BtnDiv>
  <button>Button 4</button>
  <BtnDiv></BtnDiv>
  </StyledDiv1>

)
}


export default Menu;
