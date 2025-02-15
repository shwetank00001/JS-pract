import React from 'react'
import { dataMain } from './data'
import Modal from './Modal'

const RedBasics = () => {
    const [people, setPeople] = React.useState(dataMain)

    const [singlePerson, setSingle] = React.useState([])

    const [showModal, setShow] = React.useState(false)

    let remove= function(idParam){
        const newData = people.filter(function(item){
            return item.id !== idParam
        })
        setPeople(newData)
    }

    const ele = people.map(function(item){
        return (
            <div key={item.id}>
                <p>{item.name}</p>
                <button onClick={() => remove(item.id)}>remove</button>
            </div>
        )
    })

    let handleSubmit = function(e){
        e.preventDefault()
        const newData = {
            id: new Date().getTime(),
            name: singlePerson
        }
        setPeople(function(item){
            return [...item, newData]
        })

        setShow(true)
    }
  return (
    <div>
        {showModal && <Modal showModal1 = {showModal} />}
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Add a name' name="singlePerson" value={singlePerson} onChange={(e) => setSingle(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        {ele}
    </div>
  )
}

export default RedBasics