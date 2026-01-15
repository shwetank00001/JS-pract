import {useState} from 'react'
import { names } from './names'

const States = () => {
    const [data, setData] = useState(names);

    const [addData, setAddData] = useState('')

    function handleDelete(idParam){
        const newData = data.filter((item) => {
            return item.id !== idParam
        });
        setData(newData)

    }

    function handleSub(e){
        e.preventDefault();
        setData((item) => { 
            return [...item]
        })

    }

    const ele = data.map((item) => {
        return (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.address.area}</p>
                <p>{item.address.pg}</p>
                <button onClick={() => {handleDelete(item.id)}} >Del</button>
                <hr />
            </div>
        )
    })
  return (
    <div>
        <form onSubmit={handleSub}>
            <input placeholder='add' type='name' value={addData} onChange={(e) => setAddData(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
        {ele}
        
    </div>
  )
}

export default States