import React from 'react';
import './News.css'
import styled from 'styled-components';



const StyledDiv1 = styled.div`
text-align: center;
border-radius: 10px;

`

const BtnDiv = styled.div`
width: 30px;
display: inline-block;
`




const News = (props) => {
  return (
    <StyledDiv1>
    <button className = 'News1'>AWS</button>
    <BtnDiv></BtnDiv>
    <button className = 'News2'>Azure</button>
    <BtnDiv></BtnDiv>
    <button className = 'News3'>Google</button>
    <BtnDiv></BtnDiv>
    <button className = 'News4'>Cloud</button>
    </StyledDiv1>
)
}


export default News;
