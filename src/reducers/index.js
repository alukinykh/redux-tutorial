import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import table from  './table'

export default combineReducers({
  page,
  user,
  table
})