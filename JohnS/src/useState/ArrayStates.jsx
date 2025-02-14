import React from 'react'
import { personData } from './data'

const ArrayStates = () => {
    const [single, setSingle] = React.useState(personData)

    //So this will return every id that is not equal to item.id and store it in newPerson
    function del(id){
        const newPerson = single.filter(function(item){
            return item.id !== id
        })
        setSingle(newPerson)
    }
  return (
    <div>
        {
            single.map(function(item){
                return (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <button onClick={() => del(item.id)}>delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ArrayStates