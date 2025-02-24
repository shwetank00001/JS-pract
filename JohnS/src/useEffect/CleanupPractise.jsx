import React from 'react'

function CleanupPractise(){
    console.log("Parent Component")

    const [size, setSize] = React.useState(window.innerWidth)

    function calc(){
        setSize(window.innerWidth)
    }

    React.useEffect(() => {
        window.addEventListener("resize", calc)
        console.log("Event LISTENER ADDED ")
        return () => {
            window.removeEventListener("resize", calc)
            console.log("Event LISTENER Removed ")
        }
    }, [size])
    return(
        <>
        <h1>{size}</h1>
        </>
    )
}

export default CleanupPractise