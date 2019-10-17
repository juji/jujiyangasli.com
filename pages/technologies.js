import React, { useState, useEffect } from 'react'
import data from 'data/tech'
import Loader from 'components/Loader'
import { Tooltip } from 'react-tippy';
import { useTrail, animated } from 'react-spring'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  .tech-group{
    margin-bottom: 34px;

    &>div{
      display: inline-block;
    }

    @media only screen and (max-width: 584px) {
      &>div{
        display: block;
      }
    }
  }

  .tech-group:last-child{
    margin-bottom: 0px;
  }
`

export const TechThumb = styled.a`

  display: inline-block;
  width: 150px;
  height: 150px;
  background-color: #010304;
  background-position: center center;
  background-size: 70% auto;
  background-repeat: no-repeat;
  margin-right: 8px;
  margin-bottom: 8px;

  transition: all 200ms;

  ${props => props.image && css`
    background-image: url('${props.image}');
  `}

  &:hover{
    background-size: 80% auto;
  }

  &#nodejs{
    background-size: 50% auto;
  }
  &#nodejs:hover{
    background-size: 60% auto;
  }

  &#docker{
    background-size: 90% auto;
  }
  &#docker:hover{
    background-size: 100% auto;
  }

  &#electron{
    background-size: 100% auto;
    width: 300px;
  }
  &#electron:hover{
    background-size: 110% auto;
  }

  &#html5{
    background-size: 50% auto;
  }
  &#html5:hover{
    background-size: 60% auto;
  }

  &#css3{
    background-size: 50% auto;
  }
  &#css3:hover{
    background-size: 60% auto;
  }

  &#elastic{
    width: 300px
  }

  &#nats{
    width: 300px
  }

  &#do{
    background-size: 80% auto;
  }
  &#do:hover{
    background-size: 90% auto;
  }

  &#beanstalk{
    background-size: 40% auto;
  }
  &#beanstalk:hover{
    background-size: 50% auto;
  }

  &#stripe,&#algolia,&#twilio,&#mailgun,&#sendgrid{
    width: 200px;
  }

  transition: all 500ms;

  @media only screen and (max-width: 584px) {

    transition: all 200ms;
    background-size: auto 80%;
    padding-left: 0px;
    padding-right: 0px;

    &:hover{
      background-size: auto 90%;
    }

    &,&#stripe,&#algolia,&#twilio,&#mailgun,&#sendgrid,&#elastic,&#nats,&#electron{
      width: 100%;
    }

    &#express,&#algolia,&#mailgun,&#sendgrid{
      background-size: auto 30%;
    }

    &#express:hover,&#algolia:hover,&#mailgun:hover,&#sendgrid:hover{
      background-size: auto 40%;
    }

    &#adonis,&#nats,&#elastic{
      background-size: auto 50%;
    }
    &#adonis:hover,&#nats:hover,&#elastic:hover{
      background-size: auto 60%;
    }

    &#nodejs,&#next,&#socketio,&#beanstalk,
    &#mailchimp,&#github,&#bitbucket{
      background-size: auto 60%;
    }

    &#nodejs:hover,&#next:hover,&#socketio:hover,&#beanstalk:hover,
    &#mailchimp:hover,&#github:hover,&#bitbucket:hover{
      background-size: auto 70%;
    }

    &#html5,&#css3{
      background-size: auto 80%;
    }

    &#html5:hover,&#css3:hover{
      background-size: auto 90%;
    }

    &#docker,&#do,&#stripe{
      background-size: auto 90%;
    }

    &#docker:hover,&#do:hover,&#stripe:hover{
      background-size: auto 100%;
    }

  }

`

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

  return <Container>
    <h2>
      <span className="blue">Technologies</span>&nbsp;&nbsp;
      {loading ? <Loader /> : null}
      <br />
      <small><small><small>Techs i'm familiar with</small></small></small>
    </h2>
    <br />
    { draw ? <Tech onStart={onStart} /> : null }
  </Container>

}
