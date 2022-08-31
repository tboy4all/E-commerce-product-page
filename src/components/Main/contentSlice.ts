import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
  pictureIndex: number
  productImg: string
  qtyOrder: number
  totalCartQty: number
}

const initialState: InitialStateType = {
  pictureIndex: 1,
  productImg: '',
  qtyOrder: 0,
  totalCartQty: 0,
}

const contentSlice = createSlice({
  name: 'mainContent',
  initialState,
  reducers: {
    togglePictureIndex: (state, action: PayloadAction<number>) => {
      state.pictureIndex = action.payload
    },
    // updateProductImg: (state, action) => {
    //   state.productImg = action.payload
    // },
    incrementQty: (state) => {
      state.qtyOrder += 1
    },
    decrementQty: (state) => {
      state.qtyOrder -= 1
    },
    updateTotalCartQty: (state, action) => {
      state.totalCartQty += action.payload
    },
  },
})

export default contentSlice.reducer
export const {
  togglePictureIndex,
  incrementQty,
  decrementQty,
  updateTotalCartQty,
} = contentSlice.actions
