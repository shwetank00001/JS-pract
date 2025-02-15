import React from 'react'

const ConditionalEffects = () => {
    const [count, setCount] = React.useState(0)
    
    React.useEffect(function(){
        console.log("Effect rendered")
        document.title = count === 0 ? document.title: `New Message(${count})`
    })
    console.log("COmpo rendered")
  return (
    <>
    <h2>Changing something outside the browser i.e the title of browser with count</h2>
    <button onClick={() => setCount(function(item){
        return item = item +1
    })}>Update title</button>
    {count}
    </>
  )
}

export default ConditionalEffects

