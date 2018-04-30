import cookies from 'js-cookies'
const promiseMiddleware = () => {
  return next => action => {
    const { promise, type, token, ...rest } = action

    if (!promise) return next(action)

    const SUCCESS = type + '_SUCCESS'
    const REQUEST = type + '_REQUEST'
    const FAILURE = type + '_FAILURE'
    next({ ...rest, type: REQUEST })
    return promise
      .then(response => response.json())
      .then(response => {
        next({ ...rest, response: response, type: SUCCESS })
        return true
        if (token) {
          const secure = window.location.protocol === 'https'
          cookies.setItem(
            'API_TOKEN',
            response.data.token,
            undefined,
            '/',
            undefined,
            secure
          )
        }
      })
      .catch(error => {
        next({ ...rest, error, type: FAILURE })
        console.log(error)
        return false
        if (error.status.code == 401) {
          cookies.remove('API_TOKEN')
        }
      })
  }
}
export default promiseMiddleware
