import React from 'react'
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
0% {
  opacity: 1;
}
50% {
  opacity: 0.5;
}
100% {
  opacity: 0;
}
`

const Loader = styled.span`
  span:first-child{ animation: ${blink} 1s linear infinite; }
  span:nth-child(2){ animation: ${blink} 1s linear infinite; animation-delay: 250ms; }
  span:last-child{ animation: ${blink} 1s linear infinite; animation-delay: 500ms; }
  span{
    margin:0;
    padding: 0 2px;
    color: ${p => p.color || 'white'};
  }
  font-size: ${p => p.fontSize || '1rem' }
  text-align: center;
`

export default () => <Loader>
  <span>▪</span>
  <span>▪</span>
  <span>▪</span>
</Loader>
