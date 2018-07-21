import React from 'react'
import presenter from '../../hoc/presenter'
import Presenter from './presPM'
import * as Actions from '../../redux/actions/posts'

const Pres = props => {
  console.log('props', props.storeValue)
  return <div>presenter</div>
}

export default presenter(Presenter, Pres)
