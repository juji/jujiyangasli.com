import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LogoContainer = styled.div`

  h1{
    font-family: 'Source Serif Pro', serif;
    font-weight: 400;
    font-size: 4.236em;
    line-height: 1em;
    margin-top: 13px;
  }

  a{
    color:white;
    text-decoration:none;
  }
`

export default (props) => <LogoContainer className="logo">
  <h1><Link to="/">juji };</Link></h1>
</LogoContainer>;
