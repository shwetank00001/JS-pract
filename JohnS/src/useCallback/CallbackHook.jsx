import React, {useState, useCallback} from 'react'

const CallbackHook = () => {
    const [count, setCount] = useState(0)

    let add = useCallback (function(){
        setCount(count+1)
        console.log(`CALLBACK RENDERED: ${count}` )
    }, [])
  return (
    <div>
        <h3>
            Callback basics revise
        </h3>
        <button onClick={add}>+</button>
        <pre>{count}</pre>
    </div>
  )
}

export default CallbackHook