import React from 'react'

const Uncontrolled = () => {
    const inputRef = React.useRef(null)

    React.useEffect(() => {
        inputRef.current.focus()
    }, [])

  return (
    <div>
        <input type='text' ref={inputRef} />
    </div>
  )
}

export default Uncontrolled