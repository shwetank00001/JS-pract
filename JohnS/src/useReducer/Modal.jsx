import React from 'react'

const Modal = (props) => {
  const [flip, setFlip] = React.useState(true)

  setTimeout(() => {
    setFlip(false)
  }, 3000)
  return (
    <div>
      {flip && <p>{props.modalContentProp}</p>}
    </div>
  )
}

export default Modal