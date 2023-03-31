import React from 'react'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../redux/features/cart/cartSlice'

const CartContainer = () => {
  const dispatch = useDispatch()
  const { cartItems, amount, total } = useSelector((state) => state.cart)

  if (amount === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is current empty</h4>
        </header>
      </section>
    )
  }
  return (
    <>
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              {' '}
              total <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clear cart
          </button>
        </footer>
      </section>
    </>
  )
}

export default CartContainer
