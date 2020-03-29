import React from 'react';
import './Menu.css'
import styled from 'styled-components';



const StyledDiv1 = styled.div`
background: grey;
text-align: center;
height: 50px;
margin: 10px;
border-radius: 10px;
padding: 10px;
`

const Button = styled.button`
border-radius: 7px;
width: 250px;
height: 50px;
text-align: center;
font-size: 22px;

`
const BtnDiv = styled.div`
width: 15px;
display: inline-block;
`

const Menu = (props) => {
  return (

    <StyledDiv1>
  <Button>Button 1</Button>
  <BtnDiv></BtnDiv>
  <Button>Button 2</Button>
  <BtnDiv></BtnDiv>
  <Button>Button 3</Button>
  <BtnDiv></BtnDiv>
  <Button>Button 4</Button>
  <BtnDiv></BtnDiv>
  </StyledDiv1>

)
}


export default Menu;
