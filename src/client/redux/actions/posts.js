import { GET_POSTS } from '../constants'

export const getApiData = () => {
  return {
           type: GET_POSTS,
             promise: fetch('https://jsonplaceholder.typicode.com/posts')
  }
}
