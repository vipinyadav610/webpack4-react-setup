import React, { Component } from 'react'
import { connect } from 'react-redux'

const presenter = (Presenter, ViewComp, Actions) => {
  class WrappedView extends Component {
    constructor(props) {
      super(props)
      this.pm = new Presenter(props, this)
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (this.pm.shouldComponentUpdate) {
        return this.pm.shouldComponentUpdate(nextProps, nextState)
      }
      return true
    }

    componentDidMount() {
      this.pm.componentDidMount && this.pm.componentDidMount()
    }

    componentWillMount() {
      this.pm.componentWillMount && this.pm.componentWillMount()
    }

    componentWillReceiveProps(next) {
      this.pm.componentWillReceiveProps &&
        this.pm.componentWillReceiveProps(next)
    }

    componentWillUnmount() {
      this.pm.componentWillUnmount && this.pm.componentWillUnmount()
    }

    render() {
      return <ViewComp {...this.props} pm={this.pm} />
    }
  }
  return connect(state => ({ storeValue: state }), Actions)(WrappedView)
}
export default presenter
