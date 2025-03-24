import React from 'react'
import { useParams } from 'react-router-dom'


//Yes, useParams is used to implement dynamic routing in React applications
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