import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, increamAmt, descreaseAmt, totalAmt } from '../feature/cart/cartSlice'
import './style.css'


const SingleProduct = (props) => {
    // const {amount } = useSelector((globalState) => globalState.cart)
    // console.log(amount)
    // console.log(props.idProp)
    const dispatch = useDispatch()
    // console.log(props.propAmount) 
    
  return (
    <div className='single'>
        <img src={props.imgProp} alt={props.imgProp}/>
        <h3>{props.titleProp}</h3>
        <p>$ {props.priceProp}</p>
        <button onClick={() => dispatch(removeItem(props.idProp))} >Remove</button>
        <button onClick={() => dispatch(descreaseAmt(props.idProp))}>-</button>
        <button>{props.propAmount}</button>
        <button onClick={() => 
{          dispatch(increamAmt(props.idProp))
          dispatch(totalAmt)}
          }>+</button>
    </div>
  )
}

export default SingleProduct