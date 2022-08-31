import { createSlice } from '@reduxjs/toolkit'

export type CartItem = {
  markedPrice: string | null
  qtyOrdered: number
  imageSrc: string
}

type InitialStateType = Record<string, CartItem>

const initialState: InitialStateType = {}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state[action.payload.key] = action.payload.data
    },
    removeFromCart: (state, action) => {
      delete state[action.payload]
    },
  },
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions
