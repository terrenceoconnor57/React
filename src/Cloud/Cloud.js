import React from 'react';
import './Cloud.css'
import styled from 'styled-components';


const Center = styled.div`
position: absolute;
padding-left: 250px;

`


const StyledDiv1 = styled.div`

background: black;
text-align: center;
height: 200px;
width: 600px;
margin: 10px;
border-radius: 10px;
padding: 20px;
`


const BtnDiv = styled.div`
width: 15px;
display: inline-block;
`

const Cloud = (props) => {
  return (
<Center>
    <StyledDiv1>
  <button className = 'AWS'>AWS</button>
  <BtnDiv></BtnDiv>
  <button className = 'AZU'>Azure</button>
  <BtnDiv></BtnDiv>
  </StyledDiv1>
</Center>
)
}


export default Cloud;
