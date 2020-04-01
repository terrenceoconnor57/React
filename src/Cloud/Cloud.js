import React from 'react';
import './Cloud.css'
import styled from 'styled-components';


const Center = styled.div`
padding-left: 5px;
padding-right: 5px;
padding-top: 0px;
background: none;


`




const BtnDiv = styled.div`
width: 30px;
display: inline-block;
`






const Cloud = (props) => {
  return (

<Center>

    <button className = 'ResGroup'>{props.Source}</button>
    <BtnDiv></BtnDiv>
  <button className = 'AWS' onClick={()=> window.open(props.Amazon)}>{props.Aws}</button>
  <BtnDiv></BtnDiv>
  <button className = 'AZU' onClick={()=> window.open(props.Micro)}>{props.Azure}</button>
  <BtnDiv></BtnDiv>
  <button className = 'GCP' onClick={()=> window.open(props.Ggl)}>{props.Gcp}</button>
  <BtnDiv></BtnDiv>
</Center>
)
}


export default Cloud;
