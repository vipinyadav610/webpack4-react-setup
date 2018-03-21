import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Actions from '../../redux/actions/posts'
@connect(state => ({}), Actions)
class Home extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.getApiData}>Home</button>
      </div>
    )
  }
}
Home.propTypes = {
  getApiData: PropTypes.func
}
export default Home
