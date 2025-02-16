import React from 'react'
import { dataMain } from './data'
import { useContext } from 'react'

const PeopleContext = React.createContext()

const ContextAPI = () => {

  const [people, setPeople] = React.useState(dataMain)
  const removeData =function(idParam){
    return (
      setPeople(function(item){
        return item.filter(function(item){
          return item.id !== idParam
        })
      })
    )
  }

  return (
    <PeopleContext.Provider value ={{people, removeData}}>
      <List 
      />
    </PeopleContext.Provider>
  )
}

let List = function(props){
  return (
    <section>
      <SingleData  />
    </section>
  )
}

let SingleData = function(props){
  let {people, removeData} = useContext(PeopleContext)
  return (
    <div>
      {
        people.map(function(item){
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <button onClick={() => removeData(item.id)}>Del</button>
              
            </div>
          )
        })
      }

    </div>
  )
}

export default ContextAPI