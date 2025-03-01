import React from 'react'
import { clearCart } from '../feature/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Do you want to clear these items?</h3>
      <button>Confirm</button>
      <button>Cancel</button>
    </div>
  )
}

export default Modal