import React from 'react'
import WorkDetails from 'components/WorkDetails'
import {withRouter} from 'next/router'

const text = <div>
  <div><a target="_blank" rel="noopener noreferrer" href="https://reedwater.io">https://reedwater.io</a></div>
  <p>The project is ongoing..</p>
  <p>A system to prevent flooding in urban areas, where the flood comes from inside of the buildings</p>
  <p>What a great way to help people...</p>
  <br />
  <p>Technologies&nbsp;used:{' '}
    <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">NextJS</a>,{' '}
    <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">DigitalOcean</a>.
  </p>
</div>

export default withRouter(({router}) => {

  const id = router.pathname.replace(/\/$/,'').split('/').pop();
  return <WorkDetails id={id} text={text} />

})
