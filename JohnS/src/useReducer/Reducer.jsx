import React, {useState, useReducer} from 'react'
import Modal from './Modal'
import {personData} from '../useState/data'

const Reducer = () => {
  const [people, setPeople] = useState([])
  const [peopleList, setPeopleList] = useState(personData)
  const [showModal, setModal] = useState(false)

  let handleSubmit = function(e){

    e.preventDefault()
    const newData = {
      id: new Date().getTime(),
      name: people
    }
    setPeopleList(function(item){
      return [...item, newData] 
    })
  }


  console.log(peopleList)

  const del = function(idParam){
    const newData = peopleList.filter(function(item){
      return item.id !== idParam
    })
    setPeopleList(newData)
  }

  const ele = peopleList.map(function(item){
    return (
      <div key={item.id}>
        <p>{item.name}</p>
        <button onClick={()=> del(item.id)}>Remove</button>
      </div>
    )
  })

  return (
    <>
    {showModal && <Modal />}
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Add a name...' name='people' value={people} onChange={(e) => setPeople(e.target.value)} />
      <button type='submit'>Add To The list</button>
    </form>
    <div>
      {ele}
    </div>
    </>
  )
}

export default Reducer