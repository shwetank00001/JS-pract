import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const amount = useSelector(function(globalState){
        // console.log(globalState)
        return globalState.cart.amount
    })

    // const {amount} = useSelector((globalState) => globalState.cart)
        // destructuring^^
  return (
    <div>
        <h5>The total amount in the cart is :   {amount}</h5>
    </div>
  )
}

export default Navbar