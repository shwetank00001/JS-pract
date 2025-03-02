import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increaseAmt, decreaseAmt } from '../features/cart/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const cartList = useSelector(function(globalState) {
        return globalState.cart.selectedItem
    })
    const {amount} = useSelector(globalState => globalState.cart)

    const renderCartList = cartList.map(function(item){
        return (
            <div key={item.id} class="flex justify-center items-center gap-4">
                <img class="w-16 sm:w-16 md:w-32 lg:w-48" src= {item.image} alt={item.title} />
                <h1 class="md:text-lg lg:text-2xl subpixel-antialiased">{item.title}</h1>
                <p>{item.price}</p>
                <button 
                    onClick={() => dispatch(removeFromCart(item.id))}
                    class="bg-blue-700 p-2 rounded-md text-white">Remove</button>
                <button 
                    onClick={() => dispatch(decreaseAmt(item.id))}
                    class="bg-blue-700 p-2 rounded-md text-white">
                        -
                </button>
                <p>{item.amount}</p>
                <button 
                    onClick={() => dispatch(increaseAmt(item.id))}
                    class="bg-blue-700 p-2 rounded-md text-white">
                        +
                </button>
            </div>
        )
    })
  return (
    <div>
        <p>Total amount of product in cart is: {amount}</p>
        {renderCartList}
    </div>
  )
}

export default Cart