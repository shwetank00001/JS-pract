import React, { useState } from 'react'
import {names} from './privateData'

const PersonalData = () => {
  

  const [personalData, setData] = useState(names);

  console.log(personalData);

  const ele = personalData.map((item) => {
    return (
      <div>
        <h3>{item.name}</h3>
        <h2>{item.place}</h2>
        <h2>{item.age}</h2>
        <hr />
      </div>
    )
  })
  return (
    <div>
      <h2>Personal Data</h2>
      {ele}
    </div>
  )
}

export default PersonalData