import React, { useState } from 'react'

const Reducer = () => {

    const [data, setData] = useState([]);


  return (
    <div>
        <form>
            <input placeholder='Enter todo' value={data} onChange={(e) => setData(e.target.value)}  />
            <button type='submit'>Add </button>
        </form>
    </div>
  )
}

export default Reducer