import { combineReducers } from 'redux'
import listById from './listById'

const reducers = {
  listById
}

const rootReducer = combineReducers(reducers)
export default rootReducer
