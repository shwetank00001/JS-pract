import React, {useEffect} from 'react'

const Dependency = () => {
    const [count, setCount] = React.useState(0)
    
    React.useEffect(function(){
        console.log("Effect of [array] dependency updates whenever the value changes")
        document.title = count === 0 ? document.title: `New Message(${count})`
    }, [count]) // will render only when count changes
    // [] empty dep = Effect will only run once when rendering
    console.log("Parent rendered")

    React.useEffect(() => {
        console.log("Effect of empty dependency will render once")
    }, [])
    React.useEffect(() => {
        console.log("Effect of NO dependency array will render everytime")
    })

    console.log("Parent rendered2")
  return (
    <>
    <h2>Dependency Array</h2>
    <button onClick={() => setCount(function(item){
        return item = item +1
    })}>Update title</button>
    {count}
    </>
  )
}

export default Dependency