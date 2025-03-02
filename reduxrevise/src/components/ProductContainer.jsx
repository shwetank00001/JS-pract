import React from 'react'
import SingleProduct from './SingleProduct'
import {  useDispatch,useSelector } from 'react-redux'
import { clearCart, totalAmt } from '../feature/cart/cartSlice'

import { openModal } from '../feature/modal/modalSlice'


const ProductContainer = () => {
    const url = "https://course-api.com/react-useReducer-cart-project"
//use selector is used to access the global state data in our component!
    const dispatch = useDispatch()
    // three ways to pull data from useSelector
    const data = useSelector(function(globalState){
        return globalState.cart.cartItem
    })

    const {amount } = useSelector((globalState) => globalState.cart)

    const total = useSelector((globalState) => globalState.cart.total)
    console.log(data)

    const ele = data.map(function(item){
        return (
            <SingleProduct
                key = {item.id} 
                idProp = {item.id}
                imgProp = {item.img}
                titleProp = {item.title}
                priceProp = {item.price}
                propAmount = {item.amount}
            />

        )
    })

    if(amount < 1){
        return (
            <>
            <h1>Your bag is empty</h1>
            </>
        )
    }
    else 
{  return (
    <>
    <div>
        <h3>Adding the Container which will have the list</h3>
        {ele}
    </div>
    <div>
    <small>The total value for the selection is :- ${total}</small>
    <button onClick={() => dispatch(openModal())}>
        Clear Cart
    </button>
    </div>
    </>
  )
}}

export default ProductContainer