import React from 'react'

const Basics = () => {
    const [count, setCount] = React.useState(0)
    React.useEffect(function(){
        console.log("CEffect rendered")
        document.title = `New Message(${count})`
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

export default Basics

/* By default, useEffect runds on every render
This is used as a cleanup function
We also have a second parameter
*/