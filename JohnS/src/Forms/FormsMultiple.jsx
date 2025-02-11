// instead of using different states. we can make a statr of f objects and work accordingly
import React from 'react'

const FormsMultiple = () => {
    const [data, setData] = React.useState({
        first : "",
        age: "",
        email : ""
    })

    const [details, setDetails] = React.useState([])
    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        setData(function(item){
            return {
                ...item,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(data)
        if(data.fname && data.age && data.email){
            let newData = {id: new Date().getTime(), ... data}
            setDetails(function(item){
                return [...item, newData]
            })
        }
    }
    console.log("details", ...details)

    const ele = details.map(function(item){
        return (
            <div key={item.id}>
                <p>{item.first}</p>
                <p>{item.age}</p>
                <p>{item.email}</p>
            </div>
        )
    })

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <h1>Form Multiple Inputs revise</h1>
            <label htmlFor='fname'>Name: </label>
            <input type='text' id = "fname" name='first' value={data.first} onChange={handleChange}  />

            <label htmlFor='age'>Age: </label>
            <input type='text' id = "age" name='age' value={data.age} onChange={handleChange}  />

            <label htmlFor='email'>email: </label>
            <input type='text' id = "email" name='email' value={data.email} onChange={handleChange}   />

            <button >Submit</button>
        </form>
        {ele}
    </div>
  )
}

export default FormsMultiple