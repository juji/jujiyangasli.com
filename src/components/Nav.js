import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import { TiHome } from "react-icons/ti";


export const NavContainer = styled.nav`

  line-height: 89px;
  background-color: transparent;
  padding:0px 55px;

  a{
    display:inline-block;
    margin-right:13px;

    svg{
      position: relative;
      top: 3px;
      margin-right: 8px;
    }
  }

  &.bottom{
    background-color: #000000;
  }

  @media (max-width: 768px) {
    &.bottom{
      line-height: 55px;
      padding:0px 34px;
    }
  }

  transition: all 500ms;

`

export default (props) => <NavContainer
  className={cn(props.className||{}, "nav")}
>
  {props.showHome ? <Link to="/"><TiHome size="21px" /></Link> : '' }
  <Link to="/work">Work</Link>
  {/* <Link to="/play">Play</Link> */}
  <Link to="/technologies">Technologies</Link>
  <Link to="/contacts">Contacts</Link>
</NavContainer>
