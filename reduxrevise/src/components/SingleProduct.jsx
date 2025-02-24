import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../feature/cart/cartSlice'


const SingleProduct = (props) => {
    const {amount } = useSelector((globalState) => globalState.cart)
    // console.log(props.idProp)
    const dispatch = useDispatch()
    
  return (
    <div>
        <img src={props.imgProp} alt={props.imgProp}/>
        <h3>{props.titleProp}</h3>
        <p>$ {props.priceProp}</p>
        <button onClick={() => dispatch(removeItem(props.idProp))} >Remove</button>
        <button>-</button>
        <button>{amount}</button>
        <button>+</button>
    </div>
  )
}

export default SingleProduct