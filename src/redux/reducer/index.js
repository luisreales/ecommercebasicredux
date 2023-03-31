import { createSlice } from '@reduxjs/toolkit'
import { data, productReducer } from './productReducer'

//combinar todos los reducers

export const productSlice = createSlice({
  name: 'products',
  initialState: data,
  reducers: {
    setProducts: (state, action) => {
      state.push(action.payload)
    },
  },
})

//se exportan los reducers para ser importados en el context

export default productSlice.reducer
