import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
  padding: 89px;
  font-size: 14px;
  color: #b7b7b7;
  max-height: 100%;
  overflow: auto;
  ${p => p.theme.mobile ? `
    padding: 34px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  `: ''}

`


export default props => {

  const { text } = props
  return <TextContainer>{ text }</TextContainer>
}
