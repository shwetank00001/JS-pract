import React from 'react'

const Basics = () => {
    const [text, setText] = React.useState("Random")
    const [newText, setNew] = React.useState(false)

    function flip(){
        if(text === "Random"){
            setText("Hello")
        }
        else setText("Random")

        setNew(function(item){
            return !item
        })

    }
  return (
    <div>
        {text}
        <p>{newText ? "Personal challenged" : "Ego Fullfilled"}</p>
        <button onClick={flip}> Click to flip</button>
    </div>
  )
}

export default Basics