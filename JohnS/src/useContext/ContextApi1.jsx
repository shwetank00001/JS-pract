import React, { useContext } from "react";
import { dataMain } from "./data";

const PeopleContext = React.createContext()

function ContextApi1() {
  const [people, setPeople] = React.useState(dataMain)
  const [value, setValue] = React.useState()
  const ele = people.map(function(item){
    return(
      <div key = {item.id}>
        {item.name}
      </div>
    )
  })

  function handleAdd(e){
    e.preventDefault()
    setPeople(function(item){
      const newValue = {id: new Date().getTime(), name: value}
      return [...item, newValue]
    })
  }

  return( 
    <PeopleContext.Provider value = {{people}} >
      <div>
        <form>
          <input type="text" name="value" value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={handleAdd}>+</button>
        </form>
        {ele}

        <Child1/>
      </div>
    </PeopleContext.Provider>
  )
}

function Child1(){
  return (
    <div>
      CHild 1
      <Child2 />
    </div>
  )
}
function Child2(){
  return (
    <div>
      Child 2
      <Child3 />
    </div>
  )
}
function Child3(){
  const {people} = useContext(PeopleContext)
  return (
    <div>
      <h3>Child3 needs data from Parent</h3>
      {
        people.map(function(item){
          return(
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ContextApi1;
