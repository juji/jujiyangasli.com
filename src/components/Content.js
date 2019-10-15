import React, { useMemo } from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import RSC from "react-scrollbars-custom";
import mobile from 'is-mobile'

const Content = styled.div`
  transition: all 500ms;

  &>.ScrollbarsCustom>.ScrollbarsCustom-TrackY{
    right: -55px !important;
  }

  .ScrollbarsCustom-ThumbY, .ScrollbarsCustom-ThumbX{
    background-color: #2b2b2b !important;
  }

  ${p => p.mobile ? '' : `
    min-height: 333px;
  `}
`

export default p => {

  const isMobile = useMemo(() => mobile({ tablet: true }),[])
  // console.log('isMobile', isMobile)

  return <Content
    mobile={isMobile}
    className={cn(p.className||{},"content")}
  >{isMobile ? p.children : <RSC>{p.children}</RSC>}</Content>

}
