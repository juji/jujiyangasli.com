import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import RSC from "react-scrollbars-custom";

const Content = styled.div`
  transition: all 500ms;

  &>.ScrollbarsCustom>.ScrollbarsCustom-TrackY{
    right: -55px !important;
  }

  .ScrollbarsCustom-ThumbY, .ScrollbarsCustom-ThumbX{
    background-color: #2b2b2b !important;
  }
`

export default p => <Content
  className={cn(p.className||{},"content")}
><RSC>{p.children}</RSC></Content>
