import React, { useEffect } from 'react'

const CleanupEffect = () => {
    const [size, setSize] = React.useState(window.innerWidth)

    function newSize(){
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", newSize )
        console.log("Main Effect")
        return function(){
            window.removeEventListener("resize", newSize)
            console.log("Cleanup effect")
        }
    }, [size])

  return (
    <div>
        <h2>Cleanup function with useEffect</h2>
        <p>{size}</p>
    </div>
  )
}

export default CleanupEffect