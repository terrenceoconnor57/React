import React from 'react';
import './Cloud.css'
import styled from 'styled-components';


const Center = styled.div`
padding-left: 100px;
padding-right: 100px;
padding-top: 50px;
`


const StyledDiv1 = styled.div`
text-align: center;
border-radius: 10px;

`


const BtnDiv = styled.div`
width: 30px;
display: inline-block;
`

const Cloud = (props) => {
  return (
<Center>
    <StyledDiv1>
    <button className = 'ResGroup'>{props.Aws}</button>
    <BtnDiv></BtnDiv>
  <button className = 'AWS'>{props.Aws}</button>
  <BtnDiv></BtnDiv>
  <button className = 'AZU'>{props.Azure}</button>
  <BtnDiv></BtnDiv>
  <button className = 'GCP'>{props.Gcp}</button>
  <BtnDiv></BtnDiv>
  </StyledDiv1>
</Center>
)
}


export default Cloud;
