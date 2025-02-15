import React from 'react'

const Modal = (props) => {
  const [value, setValue] = React.useState(props.showModal1)

  setTimeout(()=> {
    setValue(false)
  }, 2000)
  return (
    <div>
      {value && <h2>Value inserted</h2>}
    </div>
  )
}

export default Modal