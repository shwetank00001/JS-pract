import {useEffect, useState} from 'react'

const CleanupFunction = () => {

  const [size, setSize] = useState(window.innerWidth);
  console.log("Parent rendered")

  useEffect(() => {
    window.addEventListener("resize", calcWidth)
    console.log("Effect Rendered")

    return () => {
      window.removeEventListener("resize", calcWidth);
      console.log("Effect Removed")
    }
  }, [size])

  function calcWidth(){
    setSize(window.innerWidth)
  }
  return (
    <div>
      {size}
    </div>
  )
}

export default CleanupFunction