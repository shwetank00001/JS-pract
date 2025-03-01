import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
    const amount = useSelector(function(globalState){
        // console.log(globalState)
        return globalState.cart.amount
    })

    const total = useSelector(function(globalState){
      return globalState.cart.total
    })

    // const {amount} = useSelector((globalState) => globalState.cart)
        // destructuring^^
  return (
    <div>
        <h5>The amount of products in the cart is : {amount}</h5>
        <p>{total}</p>
    </div>
  )
}

export default Navbar