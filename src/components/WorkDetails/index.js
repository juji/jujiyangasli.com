import React, {useMemo, useState} from 'react'
import data from '../../data/works'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import Texts from './Texts'
import {useTransition, animated} from 'react-spring'
import ImagePaneComp from './ImagePane'

const WorkDetail = styled.div`
  display: flex;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  z-index: 10;

  flex-direction: column;

  .work-header{
    background: #000000;
    display: flex;
    padding: 21px;
    h1{
      flex: 1 1 auto;
      margin:0;
      font-size: 21px;
      font-family: 'Source Code Pro', monospace;
    }
    a{
      flex: 0 0 auto;
      margin:0;
      font-size: 34px;
    }
    border-bottom: 1px solid #05101d;
  }

  .image-pane{
    flex: 0 0 auto;
    background: #03080e;
  }

  .text-pane{
    flex: 1 1 auto;
    box-sizing: border-box;
    background-color: #010102;

    .work-header{
      display: none;
    }
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;

    &>.work-header{
      display: none;
    }

    .image-pane{
      flex: 1 1 auto;
      padding-top:0;
    }

    .text-pane{
      width: 37.31%;
      flex: 0 0 auto;

      .work-header{
        display: flex;
      }
    }
  }

  ${p => p.fullScreen ? css`
    .text-pane{
      display: none
    }
    .image-pane{{
      flex: 1 1 auto;
    }
  ` : null}
`

const WorkHeader = props => {

  const { work } = props;
  const transitions = useTransition(true, null, {
    from: { y: -100 },
    enter: { y: 0 },
    leave: { y: -100 }
  })

  return transitions.map(({ item, key, props:{y} }) => item && <animated.div
    key={key}
    className="work-header"
    style={{
      transform: y.interpolate((y) => `translate3d(0, ${y}%, 0)`)
    }}
  >
    <h1>{work.title}</h1>
    <Link to="/works">&times;</Link>
  </animated.div>)
}

const ImagePane = props => {
  const { work, onFullScreen } = props;
  const transitions = useTransition(true, null, {
    from: { x: -100 },
    enter: { x: 0 },
    leave: { x: -100 }
  })

  return transitions.map(({ item, key, props: {x} }) => item && <animated.div
    key={key}
    className="image-pane"
    style={{
      transform: x.interpolate((x) => `translate3d(${x}%, 0, 0)`)
    }}
  >
    <ImagePaneComp onFullScreen={onFullScreen} images={work.images} />
  </animated.div>)
}

const TextPane = props => {
  const { work, fullScreen } = props;
  const transitions = useTransition(true, null, {
    from: { x: 100 },
    enter: { x: 0 },
    leave: { x: 100 }
  })

  return transitions.map(({ item, key, props:{x} }) => item && <animated.div
    key={key}
    className="text-pane"
    style={{
      transform: x.interpolate((x) => `translate3d(${x}%, 0, 0)`)
    }}
  >
    <WorkHeader work={work} />
    <Texts id={work.id} />
  </animated.div>)
}

export default props => {

  const { id } = props;
  const work = useMemo(() => data.find(v => v.id === id), [ id ])
  if(!work) return null;

  const [ fullScreen, setFullScreen ] = useState(false)
  const onFullScreen = (bool) => setFullScreen(bool)

  return <WorkDetail fullScreen={fullScreen}>
    <WorkHeader work={work} />
    <ImagePane onFullScreen={onFullScreen} work={work} />
    <TextPane work={work} />
  </WorkDetail>

}
