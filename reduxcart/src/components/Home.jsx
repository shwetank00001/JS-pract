import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addItemToCart } from '../features/cart/cartSlice'

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector(function(globalState){
        return globalState.cart.cartItems
    })
    const itemList = data.map(function(item){
        return (
            <div key={item.id} class="flex justify-center items-center gap-4">
                <img class="w-16 sm:w-16 md:w-32 lg:w-48" src= {item.image} />
                <h1 class="md:text-lg lg:text-2xl subpixel-antialiased">{item.title}</h1>
                <p>{item.price}</p>
                <button 
                    onClick={() => dispatch(addItemToCart(item))}
                    class="bg-blue-700 p-2 rounded-md text-white">Add</button>
            </div>
        )
    })
  return (
    <div class="grid lg:grid-cols-3 md:grid-cols-2" >
        {itemList}
    </div>
  )
}

export default Home