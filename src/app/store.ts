import { configureStore } from '@reduxjs/toolkit'
import contentReducer from '../components/Main/contentSlice'
const store = configureStore({
  reducer: {
    main: contentReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
