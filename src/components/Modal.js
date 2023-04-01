import React from 'react'
import { clearCart } from '../redux/features/cart/cartSlice'
import { closeModal } from '../redux/features/modal/modalSlice'
import { useDispatch } from 'react-redux'

const Modal = () => {
  const dispatch = useDispatch();
  const handleDeleteItems = () =>{
    dispatch(clearCart())
    dispatch(closeModal())

  }
  const handleCancel = () => {
     dispatch(closeModal())
  }
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all item from your shopping</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn" onClick={() => handleDeleteItems()}>
            confirm
          </button>
          <button type="button" className="btn clear-btn" onClick={() => handleCancel()}>
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
