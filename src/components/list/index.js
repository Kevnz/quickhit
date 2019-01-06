import React from 'react'
import QuickHitContext from '../../quickhit-context'
import ListBase from './list'
const List = props => (
  <QuickHitContext.Consumer>
    {context => <ListBase {...props} {...context} />}
  </QuickHitContext.Consumer>
)

export default List
