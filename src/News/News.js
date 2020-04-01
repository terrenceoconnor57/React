import React from 'react';
import './News.css'
import styled from 'styled-components';

const Center = styled.div`
padding-left: 10px;
padding-right: 10px;
margin-top: 75px;
`

const StyledDiv1 = styled.div`
text-align: center;
border-radius: 10px;
font-size: 0;
`

const BtnDiv = styled.div`
width: 15px;
display: inline-block;
`




const News = (props) => {
  return (
    <Center>
    <StyledDiv1>
    <button className = 'News1'>AWS</button>
    <BtnDiv></BtnDiv>
    <button className = 'News2'>Azure</button>
    <BtnDiv></BtnDiv>
    <button className = 'News3'>Google</button>
    <BtnDiv></BtnDiv>
    <button className = 'News4'>Cloud</button>
    </StyledDiv1>
    </Center>

)
}


export default News;
