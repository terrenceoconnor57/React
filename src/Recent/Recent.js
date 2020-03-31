import React from 'react';
import './Recent.css'
import styled from 'styled-components';








const Recent = (props) => {
  return (
<div>
<h2>{props.top}</h2>
<h2>{props.resource}</h2>
</div>
)
}


export default Recent;
