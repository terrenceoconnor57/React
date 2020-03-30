import React from 'react';
import './Cloud.css'
import styled from 'styled-components';


const Center = styled.div`
padding-left: 100px;
padding-right: 100px;
`


const StyledDiv1 = styled.div`
text-align: center;
border-radius: 10px;
`


const BtnDiv = styled.div`
width: 50px;
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
  <button className = 'GCP'>Google</button>
  <BtnDiv></BtnDiv>
  </StyledDiv1>
</Center>
)
}


export default Cloud;
