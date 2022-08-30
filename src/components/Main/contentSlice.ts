import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
  pictureIndex: number
  productImg: string
}

const initialState: InitialStateType = {
  pictureIndex: 1,
  productImg: '',
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
  },
})

export default contentSlice.reducer
export const { togglePictureIndex } = contentSlice.actions
