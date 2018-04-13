import Home from './components/Home'
import NotFound from './components/NotFound'
import SimpleForm from './components/SignUp'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/signup',
    component: SimpleForm
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes
