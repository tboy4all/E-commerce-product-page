import { configureStore } from '@reduxjs/toolkit'
import contentReducer from '../components/Main/contentSlice'
import cartReducer from '../components/cart/cartSlice'

const store = configureStore({
  reducer: {
    main: contentReducer,
    cart: cartReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
