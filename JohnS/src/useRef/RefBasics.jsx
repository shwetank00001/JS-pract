import React , {useRef}from 'react'

const RefBasics = () => {
  const refContainer = useRef(null)
  const subRef = useRef(null)

  let handleSubmit = function(e){
    e.preventDefault()
    console.log(refContainer.current)
    console.log(refContainer.current.value)
    console.log(subRef.current)
  }

  React.useEffect(() => {
    refContainer.current.focus()
  })


  return (
    <div>
      <form onClick={handleSubmit}>
        <input type='text' ref={refContainer} />
        <button type='submit' ref={subRef}>Submit</button>
      </form>
    </div>
  )
}

export default RefBasics