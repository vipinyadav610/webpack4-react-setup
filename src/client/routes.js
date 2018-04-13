import Home from './components/Home'
import NotFound from './components/NotFound'
import SimpleForm from './components/SignUp'
import ProtectedRoute from './hoc/auth'

const routes = [
  {
    path: '/',
    exact: true,
    allowed: ['manager', 'admin'],
    component: ProtectedRoute(Home)
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
