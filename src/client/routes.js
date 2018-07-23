import asyncComponent from './hoc/asyncRender'
import ProtectedRoute from './hoc/auth'

const Home = asyncComponent(() =>
  import('./components/Home').then(module => module.default)
)
const NotFound = asyncComponent(() =>
  import('./components/NotFound').then(module => module.default)
)
const SimpleForm = asyncComponent(() =>
  import('./components/SignUp').then(module => module.default)
)

const routes = [
  // {
  //   path: '/',
  //   exact: true,
  //   allowed: ['manager', 'admin'],
  //   component: ProtectedRoute(Home)
  // },
  // {
  //   path: '/home',
  //   component: Home
  // },
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
