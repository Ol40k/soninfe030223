import { combineReducers } from '@reduxjs/toolkit'
import usersReducer from './usersReducer'

export const rootReducer = combineReducers({
  users: usersReducer,
})
