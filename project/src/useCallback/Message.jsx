import React from 'react'

const Message = React.memo((props) => {

    console.log("Message rendered")
  return (
    <div>
        <h1>Message commponent</h1>
        <p>{props.mes}</p>
    </div>
  )
})

export default Message