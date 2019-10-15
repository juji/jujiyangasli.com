import React, {useRef, useEffect, useState} from 'react'
import Routes from './Routes'
import cn from 'classnames'

import Layout from './components/Layout'
import Logo from './components/Logo'
import Nav from './components/Nav'
import Content from './components/Content'
import Pendulum from './lib/doublePendulum'

import tech from './data/tech'

export default props => {

  const [fullContent, setFullContent ] = useState(false)

  const viewCanvas = /^\/$/.test(props.location.pathname)
  const canvas = useRef()
  const pendulum = useRef();

  useEffect(() => {

    setFullContent(!![
      /^\/technologies$/,
      /^\/work(\/|$)/,
      /^\/contacts$/,
      /^\/play$/,
    ].find(v => v.test(props.location.pathname)))

  },[ props.location.pathname ])

  useEffect(() => {
    if(pendulum.current && pendulum.current.stop) pendulum.current.stop();
    if(!viewCanvas) return;
    if(!canvas.current) return;
    pendulum.current = Pendulum(canvas.current, uri => {
      console.log(uri)
    })
  },[ viewCanvas ])

  // download tech data to smooth out transition
  useEffect(() => {
    tech.forEach(group => {
      group.forEach(v => {
        const m = new Image();
        m.onload = function(){
          // console.log(m)
        };
        m.src = v.image
      })
    })
  },[])

  return <Layout>
      { viewCanvas ? <canvas ref={canvas}></canvas> : (canvas.current = null) }
      <Logo />
      <Content className={cn({ full: !!fullContent })}>
        <Routes />
      </Content>
      <Nav showHome={props.location.pathname !== '/'} className={cn({ bottom: !!fullContent })} />
    </Layout>

}
