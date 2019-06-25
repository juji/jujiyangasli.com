import React, { useState, useEffect } from 'react'

import data from '../data/tech'
import { TechContainer, TechThumb } from '../components/Technologies'
import Loader from '../components/Loader'
import { Tooltip } from 'react-tippy';
import { useTrail, animated } from 'react-spring'

const TechGroup = props => {

  const { group } = props;
  const trail = useTrail(group.length, {
    from: {
      opacity: 0,
      x: 21,
    },
    opacity: 1,
    x: 0
  });

  return trail.map(({ x, height, ...rest }, index) => (
      <animated.div
        key={group[index].id}
        style={{
          ...rest,
          transform: x.interpolate(x => `translate3d(${x}px,0px,0px)`)
        }}>
        <Tooltip title={group[index].title}>
          <TechThumb
            className="tech-thumb"
            id={group[index].id}
            target="_blank"
            href={group[index].url}
            image={group[index].image}
          ></TechThumb>
        </Tooltip>
      </animated.div>
    ))

}

const Tech = props => {

  const { onStart } = props;
  const trail = useTrail(data.length, {
    delay: 500,
    onStart
  });

  return trail.map((style, index) => (
      <animated.div
        key={`techgroup_${index}`}
        className="tech-group"
      ><TechGroup group={data[index]} /></animated.div>
    ))

}

export default (props) => {

  const [ loading, set ] = useState(true)
  const [ draw, setDraw ] = useState(false)
  const onStart = () => {
    set(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setDraw(true)
    },500)
  },[])

  return <TechContainer>
    <h2>
      <span className="blue">Technologies</span>&nbsp;&nbsp;
      {loading ? <Loader /> : null}
      <br />
      <small><small><small>Techs i'm familiar with</small></small></small>
    </h2>
    <br />
    { draw ? <Tech onStart={onStart} /> : null }
  </TechContainer>

}
