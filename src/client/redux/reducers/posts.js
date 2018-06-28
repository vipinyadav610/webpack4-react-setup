import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from '../constants'
export default function posts(
  state = { isFetching: false, posts: [], error: null },
  action
) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...state, isFetching: true }
    case GET_POSTS_SUCCESS:
      return { ...state, posts: action.response, isFetching: false }
    case GET_POSTS_FAILURE:
      return { ...state, error: action.error, isFetching: false }
    default:
      return state
  }
}
