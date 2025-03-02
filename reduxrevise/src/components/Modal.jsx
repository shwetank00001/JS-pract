import React from 'react'
import { clearCart } from '../feature/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import {closeModal } from '../feature/modal/modalSlice'

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Do you want to clear these items?</h3>
      <button onClick={
        () => {
          dispatch(clearCart());
          dispatch(closeModal());
        }

      }>Confirm</button>
      <button onClick={() => dispatch(closeModal())}>Cancel</button>
    </div>
  )
}

export default Modal