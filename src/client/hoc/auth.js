import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export default ProtectedRoute => {
  class AuthHOC extends Component {
    // componentWillMount() {
    //   if (!this.props.authenticated) {
    //     this.props.history.push('/login')
    //   }
    // }

    // componentWillUpdate(nextProps) {
    //   if (!nextProps.authenticated) {
    //     this.props.history.push('/login')
    //   }
    // }

    render() {
      // if (
      //   localStorage.getItem('role') &&
      //   this.props.route.allowed &&
      //   this.props.route.allowed.includes(localStorage.getItem('role'))
      // ) {
        return <ProtectedRoute {...this.props} />
      // } else {
      //   return <div>you are no allowed for this route</div>
      // }
    }
  }
  AuthHOC.propTypes = {
    authenticated: PropTypes.bool,
    history: PropTypes.object,
    route: PropTypes.object
  }
  AuthHOC.contextTypes = { router: PropTypes.object.isRequired }
  return withRouter(
    connect(state => ({
      // authenticated: state
    }))(AuthHOC)
  )
}
