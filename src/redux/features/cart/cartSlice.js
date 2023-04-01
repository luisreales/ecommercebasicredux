import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

//import cartItems from '../../../cartItems'

const url = 'https://course-api.com/react-useReducer-cart-project';
//remove cartItems from local to assign initial value empty for array
const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
}
//createAsync recibe un tipo y la funcion del llamado a la url
// export const getCartItems  = createAsyncThunk('cart/getCartItems',() => {
//   return fetch(url).then((res) => res.json()).catch((err) => console.log(err))
// })

//now the same method but using axios and async method

export const getCartItems = createAsyncThunk('cart/getCartItems' , async () => {
  try {
    const resp = await axios(url)
    return resp.data  
  } catch (error) {
    
  }
  
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload)
      cartItem.amount = cartItem.amount + 1
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload)
      cartItem.amount = cartItem.amount - 1
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.price * item.amount
      })
      state.amount = amount
      state.total = total
    },
  },
  extraReducers:{
    [getCartItems.pending]:(state) => {
      state.isLoading = true;
    }, [getCartItems.fulfilled]:(state,action) => {
      console.log(action)
      state.isLoading = false;
      state.cartItems = action.payload
    },[getCartItems.rejected]:(state) => {
      state.isLoading = false;
    }
  }
})

console.log(cartSlice)

export default cartSlice.reducer
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions
