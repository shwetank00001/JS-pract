import React, {useState}from 'react'

const FormsPract = () => {
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])

    let handleSubmit = function(e){
        e.preventDefault()
        console.log(name,email)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='nameID'>Name: </label>
            <input id='nameID' type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor='emailID'>Email: </label>
            <input id='emailID' type='text' name='name' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button>Submit</button>
        </form>

    </div>
  )
}

export default FormsPract