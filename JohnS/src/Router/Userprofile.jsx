import React from 'react'
import { useParams } from 'react-router-dom'

const Userprofile = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>
        <h3>This is the profile for: {params.name}</h3>
    </div>
  )
}

export default Userprofile