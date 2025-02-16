import React from 'react'
import { dataMain } from './data'

const PropDrilling = () => {
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
    <div>
      <List 
      allData= {people}
      buttonProp = {removeData}
      test = {"hi"}
      />
    </div>
  )
}

let List = function(props){
  console.log("parent Data",props)
  return (
    <section>
      <SingleData 
        childData = {props.allData}
        buttonProp1 = {props.buttonProp} 
        test1= {props.test}
        />
    </section>
  )
}

let SingleData = function(props){
  console.log("Child", props.childData)
  return (
    <div>
      {
        props.childData.map(function(item){
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <button onClick={() => props.buttonProp1(item.id)}>Del</button>
              <h4>{props.test}</h4>
              
            </div>
          )
        })
      }

    </div>
  )
}

export default PropDrilling 


// BASIC scenario OF PROPDRILLING