import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state,action) => {
      state.cartItems.push(action.payload)
    },
    reset: (state) => {
      state.cartItems = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItemToCart,reset } = cartSlice.actions

export default cartSlice.reducer