import React from 'react'

const ObjectStates = () => {
    const [person, setPerson] = React.useState({
        name: "Shwetank",
        age: 25,
        goals: "I want to really become sucessful and make my parents proud!"
    })

    const updateGoals = function(){
        setPerson(function(item){
            return {
                ...item,
                goals: "I am going to have it all!!"
            }
        })
    }
  return (
    <div>
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        <h1>{person.goals}</h1> 
        <button onClick={updateGoals}>Update Goals</button>
    </div>
  )
}

export default ObjectStates