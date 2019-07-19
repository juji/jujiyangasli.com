import React from 'react'

import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoSkype,
  IoLogoNpm
} from "react-icons/io";

import { ContactsContainer } from '../components/Contacts'
import Trails from '../components/Trails'

const profiles = [
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/juji"><IoLogoGithub size="2.618em" /></a>,
  <a target="_blank" rel="noopener noreferrer" href="https://npmjs.com/~jujiyangasli"><IoLogoNpm size="2.618em" /></a>,
  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jujiyangasli/"><IoLogoLinkedin size="2.618em" /></a>,
  <a target="_blank" rel="noopener noreferrer" href="skype://juji.gunadi?chat"><IoLogoSkype size="2.618em" /></a>
]

const Profiles = props => {

  return <Trails
    components={profiles}
    transition={{
      from: {
        opacity: 0,
        x: 21,
      },
      opacity: 1,
      x: 0
    }}
    style={({ x, ...rest }) => ({
      ...rest,
      transform: x.interpolate(x => `translate3d(${x}px,0px,0px)`),
      display: 'inline-block'
    })}
    prefix={'contactprofiles'}
  />

}

const components = [
  (<h3>
    <a href="mailto:him@jujiyangasli.com"><big>him@jujiyangasli.com</big></a>
  </h3>),
  (<><p>Tangerang, Indonesia</p><br /></>),
  (<div className="contacts-link"><Profiles /></div>)
]

const Contact = props => {

  return <Trails
    components={components}
    transition={{
      from: {
        opacity: 0,
        y: 21,
      },
      opacity: 1,
      y: 0
    }}
    style={({ y, ...rest }) => ({
      ...rest,
      transform: y.interpolate(y => `translate3d(0px,${y}px,0)`)
    })}
    prefix={'contactpage'}
  />
}


export default (props) => {

  return <ContactsContainer>
    <h2>Contacts<br />
      <small><small><small><small>
        and profiles..
      </small></small></small></small>
    </h2><br />
    <Contact />
  </ContactsContainer>
}
