import React from 'react'
import { Link } from 'react-router-dom'

import data from '../data/works'
import { WorkThumb } from '../components/Works'
import Trails from '../components/Trails'

const components = data.map((work,i) => (
  <>
    <Link to={`/work/${work.id}`}>
      <img alt={work.title} src={work.images[0].url} />
      <span>{work.title}</span>
    </Link>
  </>
));

export default (props) => {

  return <div>
  <h2>
    <span className="blue">Work</span><br />
    <small><small><small>Things i'm being paid for</small></small></small>
  </h2>
  <div>
    <Trails
      components={components}
      component={WorkThumb}
      style={({y, ...rest}) => ({
        ...rest,
        transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
        display: 'inline-block'
      })}
      prefix="workthumb"
      transition={{
        from: {
          opacity: 0,
          y: 21
        },
        opacity:1,
        y:0
      }}
    />
  </div>
  <p></p>
</div>

}
