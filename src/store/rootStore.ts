import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

export const rootStore = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch
