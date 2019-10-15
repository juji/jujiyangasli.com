import React from 'react'

import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import { HomeContainer } from '../components/Home'
import Trails from '../components/Trails'

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

  return <HomeContainer>
    <Trails
      components={[
        <h2>Hello,</h2>,
        <p>My name is Tri Rahmat Gunadi.</p>,
        <p>But my friends call me <Link to="/contacts">Juji</Link>.</p>,
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
  </HomeContainer>
}
