import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Actions from '../../redux/actions/posts'
import { Query, ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'

@connect(state => ({}), Actions)
@graphql(query, {
  options: ownProps => ({
    variables: {
      itemId: 1
    }
  })
})
class Home extends React.Component {
  query = () => {
    return gql`
      query todo($itemId: Int!) {
        todo(itemId: $itemId) {
          itemId
          item
        }
      }
    `
  }
  variables = () => {
    1
  }
  render() {
    return (
      <Query query={this.query} variables={this.variables}>
        {({ loading, error, data }) => {
          console.log('data', data)
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>
          return (
            <div>
              <h1>hello world</h1>
              <ApolloConsumer>
                {client => (
                  <button
                    onClick={async () => {
                      const { data } = await client.query({
                        query,
                        variables
                      })
                      console.log('data', data)
                    }}
                  >
                    Click me!
                  </button>
                )}
              </ApolloConsumer>
            </div>
          )
        }}
      </Query>
    )
  }
}
Home.propTypes = {
  getApiData: PropTypes.func
}
export default Home
