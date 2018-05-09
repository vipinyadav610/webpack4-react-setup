import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import routes from './routes'
import store from './redux/store'

const httpLink = new HttpLink({ uri: 'http://localhost:7001/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('app')
)
module.hot.accept()
