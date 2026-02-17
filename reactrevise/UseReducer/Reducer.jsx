import { useState } from 'react'

const Reducer = () => {

    const [inputData, setInputData] = useState('');

    const [allData, setData] = useState([])


    function handleSubmit(e){
      e.preventDefault();
      console.log(inputData);
      const testData = {
        id: new Date().getTime(),
        value: inputData
      }
      setData(testData)
    }

    var displayData = allData.map(function(item){
      return (
        <div key={item.id}>
          <h3>{item.value}</h3>
        </div>
      )
    })

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='Enter todo' value={inputData} onChange={(e) => setInputData(e.target.value)}  />
            <button type='submit'>Add </button>
        </form>

        <>
          {displayData}
        </>
    </div>
  )
}

export default Reducer