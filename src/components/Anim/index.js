import styled, { keyframes } from 'styled-components'

const verti = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0,21px,0);
  }

  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

const hori = keyframes`
  from {
    opacity: 0;
    transform: translate3d(21px,0,0);
  }

  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;


export const Vertical = styled.div`
  animation: ${verti} 500ms linear;
  animation-delay: ${p => p.delay ? p.delay : 0};
`

export const Horizontal = styled.div`
  animation: ${hori} 500ms linear;
  animation-delay: ${p => p.delay ? p.delay : 0};
`
