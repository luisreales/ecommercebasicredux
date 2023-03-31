import React from 'react'
import {
  removeItem,
  increase,
  decrease,
} from '../redux/features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { ChevronDown, ChevronUp } from '../icons'

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()

  const removeHandle = (id) => {
    dispatch(removeItem(id))
  }
  const increaseHandle = (id) => {
    dispatch(increase(id))
  }
  const decreaseHandle = (id) => {
    dispatch(decrease(id))
  }
  return (
    <>
      <article className="cart-item">
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">${price}</h4>
          <button className="remove-btn" onClick={() => removeHandle(id)}>
            remove
          </button>
        </div>
        <div>
          <button className="amount-btn" onClick={() => increaseHandle(id)}>
            <ChevronUp />
          </button>
          <p className="amount">{amount}</p>
          <button
            className="amount-btn"
            onClick={() => {
              if (amount === 1) {
                removeHandle(id)
                return
              }
              decreaseHandle(id)
            }}
          >
            <ChevronDown />
          </button>
        </div>
      </article>
    </>
  )
}

export default CartItem
