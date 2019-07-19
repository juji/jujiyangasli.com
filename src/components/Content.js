import React, { useEffect, useRef } from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import RSC from "react-scrollbars-custom";
import { withRouter } from "react-router";

const Content = styled.div`
  transition: all 500ms;

  &>.ScrollbarsCustom>.ScrollbarsCustom-TrackY{
    right: -55px !important;
  }

  .ScrollbarsCustom-ThumbY, .ScrollbarsCustom-ThumbX{
    background-color: #2b2b2b !important;
  }
`

export default withRouter(p => {

  console.log(p)

  const scroll = useRef()
  useEffect(() => {
    scroll.current && scroll.current.scrollTo(0,0)
  },[ p.location && p.location.pathname ])

  return <Content
    className={cn(p.className||{},"content")}
  ><RSC ref={scroll}>{p.children}</RSC></Content>

})
