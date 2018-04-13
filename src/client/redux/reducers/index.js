import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import posts from './posts'
const rootReducer = combineReducers({ posts,form })
export default rootReducer
