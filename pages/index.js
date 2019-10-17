import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Link from 'next/link'
import Trails from 'components/Trails'


const Container = styled.div`
  margin-top:10vh;
  position: relative;

  h2{
    font-family: 'Source Code Pro', monospace;
    font-weight:400;
    font-size: 1.618em;
    margin-bottom:21px;
  }

  p{
    margin:0;
    font-size: 16px;
    margin-bottom: 5px;
  }

  div.smiley{
    margin-top:21px;
    height: 89px;
    p{
      font-size: 34px;
      line-height: 55px;
    }
  }

`

const Smiley = p => {

  const spring = useSpring({
    config: {
      mass: 1,
      tension: 500,
      friction: 8
    },
    delay: 1200,
    from: {s: 0},
    s: 1
  })

  return <div className="smiley">
    <animated.p style={{
      transform: spring.s.interpolate(s => `scale3d(1,${s},1)`)
    }}>;)</animated.p>
  </div>

}

export default (props) => {

  return <Container>
    <Trails
      components={[
        <h2>Hello,</h2>,
        <p>My name is Tri Rahmat Gunadi.</p>,
        <p>But my friends call me <Link href="/contacts"><a>Juji</a></Link>.</p>,
        <p>I am a web developer.</p>,
        <Smiley />
      ]}
      transition={{
        from: {
          opacity:0,
          y: 21
        },
        opacity: 1,
        y: 0
      }}
      style={({ y, ...rest}) => ({
        ...rest,
        transform: y.interpolate(y => `translate3d(0px, ${y}px, 0px)`)
      })}
      prefix={'hometext'}
    />
  </Container>
}
