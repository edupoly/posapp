import { configureStore } from '@reduxjs/toolkit'
import { fooditemApi } from '../services/fooditems'
import cartReducer from '../features/Cart/cartSlice'
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [fooditemApi.reducerPath]:fooditemApi.reducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(fooditemApi.middleware)
  
})