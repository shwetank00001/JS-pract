import React, {useState, useEffect} from 'react'
import {UseFetch} from './UseFetch'

const url = "https://api.escuelajs.co/api/v1/products"

const CustomEx = () => {
    const {loading, store} = UseFetch(url)
  return (
    <div>
        {loading ? "Loading" : "Data"}
    </div>
  )
}

export default CustomEx