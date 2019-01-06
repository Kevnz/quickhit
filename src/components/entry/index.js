import React from 'react'
import QuickHitContext from '../../quickhit-context'
import EntryBase from './entry'

const Entry = props => (
  <QuickHitContext.Consumer>
    {context => <EntryBase {...props} {...context} />}
  </QuickHitContext.Consumer>
)

export default Entry
