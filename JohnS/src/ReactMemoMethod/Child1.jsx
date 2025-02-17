import React from 'react'

 const Child1 = function(prop){
    React.useEffect(() => {
        console.log("CHild1 rendered")
    })
    return (
        <div>
            <h2>CHild 1</h2>
        </div>
    )
}

export default Child1