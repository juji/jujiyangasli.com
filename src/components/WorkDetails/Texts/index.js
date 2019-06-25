import React, { useState, useEffect } from 'react'
import Loader from '../../Loader'
import RSC from "react-scrollbars-custom";
import styled from 'styled-components'

const TextContainer = styled.div`
  padding: 89px;
  font-size: 14px;
  color: #b7b7b7;
`


export default props => {

  const { id, children, ...rest } = props
  const [ Comp, setComp ] = useState();
  const [ error, setErr ] = useState(false);

  useEffect(() => {
    console.log(id)
    setErr(null)
    setComp(false)
    import(`./${id}`)
      .then(c => setComp(c))
      .catch(e => {
        setErr(true)
      })
  },[ id ])

  return Comp ? <RSC>
    <TextContainer>
      <Comp.default />
    </TextContainer>
  </RSC> :
    error ?
      <span style={{color:'red'}}>[ERROR] Failed to retrieve component</span> :
      <div style={{
        marginTop: 21,
        textAlign: 'center'
      }}><Loader /></div>
}
