import React from 'react'
import { useSelector } from 'react-redux'


const SingleProduct = (props) => {
    const {amount } = useSelector((globalState) => globalState.cart)
    
  return (
    <div>
        <img src={props.imgProp} alt={props.imgProp}/>
        <h3>{props.titleProp}</h3>
        <p>$ {props.priceProp}</p>
        <button>Remove </button>
        <button>-</button>
        <button>{amount}</button>
        <button>+</button>
    </div>
  )
}

export default SingleProduct