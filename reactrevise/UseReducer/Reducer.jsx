import React, { useState } from 'react'

const Reducer = () => {

    const [data, setData] = useState([]);

    function handleSubmit(e){
        
    }

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