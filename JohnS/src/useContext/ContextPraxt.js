import React from 'react'
import { dataMain } from './data'

const PersonContext = React.createContext()
const ContextPraxt = () => {

    const [peopleData, setPeopleData] = React.useState(dataMain)
  return (
    <div>
        <PersonContext.Provider value = {{peopleData}}>
        <Child1 />
        </PersonContext.Provider>

    </div>
  )
}

export const Child1 = function(){
    return (
        <Child2/>
    )
}
export const Child2 = function(){
    const {peopleData} = React.useContext(PersonContext)
    return (
        <div>
            {
                peopleData.map(function(item){
                    return (
                        <div>
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContextPraxt