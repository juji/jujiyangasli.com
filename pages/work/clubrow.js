import React from 'react'
import WorkDetails from 'components/WorkDetails'
import {withRouter} from 'next/router'

const text = <div>
  <div><a target="_blank" rel="noopener noreferrer" href="https://www.clubrowfitness.com/">https://www.clubrowfitness.com/</a></div>
  <p>This is not even a web job..</p>
  <p>Haha.. But it reminds me to the importance of exercise. So, exercise!</p>
  <br />
  <p>
    I was working with <a href="https://cnd.digital/" target="_blank" rel="noopener noreferrer">CND</a>. We had Clubrow as a client.
    Before we move forward with the proposal, We need to make sure we can read the output of the rowing machine: <a target="_blank" rel="noopener noreferrer" href="https://www.concept2.com/">Concept2</a>.
  </p>
  <p>So we did... It was an entertaining exercise, doing bit shift operations, just like converting RBG to decimal.</p>
  <p>
    It was done using <a target="_blank" rel="noopener noreferrer" href="https://github.com/noble/noble">noble</a>, with infomation in {' '}
    <a target="_blank" rel="noopener noreferrer" href="https://www.concept2.co.uk/files/pdf/us/monitors/PM5_BluetoothSmartInterfaceDefinition.pdf">this doc</a>.
  </p>
</div>

export default withRouter(({router}) => {

  const id = router.pathname.replace(/\/$/,'').split('/').pop();
  return <WorkDetails id={id} text={text} />

})
