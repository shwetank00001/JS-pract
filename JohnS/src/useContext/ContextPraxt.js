import React from 'react'
import { dataMain } from './data'

const PeopleContext = React.createContext()

const ContextPraxt = () => {
    const [people, setPeople] = React.useState(dataMain)

  return (
    <PeopleContext.Provider value={{people}} >
        <Component1 />
    </PeopleContext.Provider>
  )
}

let Component1= function(){
    return (
        <div>
            <h3>This is Component1 rendering compo 2 in it</h3>
            <Component2 />
        </div>
      
    )

}

let Component2 = function(){
    const {people} = React.useContext(PeopleContext)
    return (
        <div>
            Component 2 data
            {
                people.map(function(item){
                    return (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContextPraxt