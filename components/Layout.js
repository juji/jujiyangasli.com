import React, { useMemo, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { TiHome } from "react-icons/ti"
import Pendulum from 'lib/doublePendulum'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 0px;
  overflow: hidden;
  position: relative;

  canvas{
    position: absolute;
    bottom:0;
    right:0;
    z-index: 0
  }

  .top-layout{
    flex: ${p => p.home ? '0 0 auto' : '1 1 auto'};
    z-index: 1;
    overflow: auto;
    ${p => p.theme.mobile ? `
      overflow-y: scroll; /* has to be scroll, not auto */
      -webkit-overflow-scrolling: touch;
    ` : null}
  }

  .bottom-layout{
    flex: 0 0 auto;
    z-index: 1;
  }

  .pad{
    height: ${p => p.home ? 'auto' : '0vh'};
    flex: ${p => p.home ? '1 1 auto' : '0 0 auto'};
    transition: all 500ms;
  }


`

const Logo = styled.div`
  padding: 0 55px;
  padding-top: ${p => p.home ? '55px' : '21px'};
  transform: translate3d(0,0,0);
  transition: all 200ms;

  h1{
    font-family: "Source Serif Pro", serif;
    font-weight: 400;
    font-size: ${p => p.home ? '4.236em' : '2.82em'};
    line-height: 1em;
    margin-top: 13px;
    transform: translate3d(0,0,0);
    transition: all 200ms;

    a{
      color: ${p => p.theme.text};
    }
  }
`
const Content = styled.div`
  padding: ${p => p.fullContent ? '0px' : '0px 55px'};
`

const Nav = styled.div`
  transition: all 500ms;
  padding: 0px 55px;

  display: flex;
  align-items: center;

  a{
    line-height: 89px;
    margin-right: 13px;
    display: flex;
    align-items: center;

    svg{
      font-size: 21px;
    }
  }
  a.home-link{
    margin-right: 21px;
  }
`

export default withRouter(({ router, children }) => {

  const isHome = useMemo(() => router.pathname === '/')
  const fullContent = useMemo(() => router.pathname.match(/\/work\/.+/))

  const canvas = useRef();
  const pendulum = useRef();

  useEffect(() => {
    if(pendulum.current && pendulum.current.stop) pendulum.current.stop();
    if(!isHome) return;
    if(!canvas.current) return;
    pendulum.current = Pendulum(canvas.current, uri => {
      console.log(uri)
    })
  },[ isHome ])

  return <Container home={isHome}>

    { isHome ? <canvas ref={canvas}></canvas> : (canvas.current = null) }

    <div className='top-layout'>
      { fullContent ? null : <Logo home={isHome}>
        <h1><Link href="/"><a>juji };</a></Link></h1>
      </Logo> }
      <Content fullContent={fullContent}>{children}</Content>
    </div>

    { fullContent ? null : <Nav className='bottom-layout' home={isHome}>
      { isHome ? null : <Link href="/"><a className="home-link"><TiHome /></a></Link> }
      <Link href="/work"><a>Work</a></Link>
      <Link href="/technologies"><a>Technologies</a></Link>
      <Link href="/contacts"><a>Contacts</a></Link>
    </Nav> }

    <div className='pad'></div>
  </Container>

})
