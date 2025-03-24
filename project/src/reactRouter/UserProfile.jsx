import React from 'react'
import { useParams } from 'react-router'

const UserProfile = () => {

  // this params will take the :name property from the url and we can access this later
    const params = useParams();
    console.log(params)

  return (
    <div>
        <h1>This profile page is for: {params.name}</h1>
    </div>
  )
}

export default UserProfile