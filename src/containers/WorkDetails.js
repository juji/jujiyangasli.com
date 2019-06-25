import React from 'react'
import WorkDetails from '../components/WorkDetails'

export default props => {

  const { match: { params }} = props;

  return <WorkDetails id={params.id} />

}
