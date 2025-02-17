import React from 'react'

export const ReactMe = () => {
    const [count, setCount] = React.useState(0)

    let add = function(){
        console.log("Add Function called")
        setCount(count + 1)
    }

  return (
    <div>
        <h2>HI</h2>
        {count}
        <button onClick={add}>Add</button>
        <Child 
        propCount = {count} 
        />
        {/* <Child1  /> */}
    </div>
  )
}

export const Child = React.memo (function(prop){
    React.useEffect(() => {
        console.log("CHild rendered")
    })
    return (
        <div>
            <h2>Main Child</h2>
            <p>{prop.propCount}</p>
            
        </div>
    )
})
export const Child1 = React.memo (function(prop){
    React.useEffect(() => {
        console.log("CHild1 rendered")
    })
    return (
        <div>
            <h2>CHild 1</h2>
            <button >Generate ticket</button>
        </div>
    )
})
