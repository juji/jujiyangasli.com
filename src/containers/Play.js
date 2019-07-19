import React from 'react'
import { Link } from 'react-router-dom'

import data from '../data/works'
import { WorkThumb } from '../components/Works'
import Trails from '../components/Trails'

const components = data.map((work,i) => (
  <>
    <Link to={`/works/${work.id}`}>
      <img alt={work.title} src={work.images[0].url} />
      <span>{work.title}</span>
    </Link>
  </>
));

export default (props) => {

  return <div>
  play
</div>

}
