import React from 'react'

function BasicsRevise (){
    const [count, setCount] = React.useState(0)

    function add(){
        setCount(item => item+1)
    }
    console.log("Component outside effect rendered")
    React.useEffect(() => {
        console.log("Component inside effect rendered")
    })

    //The code in useEffect will always render after parent
    return(
        <div>
            <h1>This is use State and useEffect</h1>
            <p>Count : {count}</p>
            <button onClick={add}>+</button>
        </div>
    )
}

export default BasicsRevise