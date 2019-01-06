import React from 'react'
import QuickHitContext from '../../quickhit-context'
import ToggleBase from './toggle'

const Toggle = props => (
  <QuickHitContext.Consumer>
    {context => <ToggleBase {...props} {...context} />}
  </QuickHitContext.Consumer>
)

export default Toggle
