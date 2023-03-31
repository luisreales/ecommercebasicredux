import { ActionTypes } from '../constants/action-type'

export const data = {
  products: [
    {
      id: 1,
      title: 'Camisa',
      category: 'Playa',
    },
  ],
}

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state
    default:
      return state
  }
}
