import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export default ProtectedRoute => {
  @connect(state => ({
    authenticated: state.auth.authenticated
  }))
  @withRouter
  class AuthHOC extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/login')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/login')
      }
    }

    render() {
      return <ProtectedRoute {...this.props} />
    }
  }
  AuthHOC.contextTypes = { router: PropTypes.object.isRequired }
  return AuthHOC
}
