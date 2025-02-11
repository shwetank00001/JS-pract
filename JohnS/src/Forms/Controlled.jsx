import React from 'react'

const Controlled = () => {
    const [name, setName ] = React.useState("")
    const [email, setEmail ] = React.useState("")
    const [person, setPerson] = React.useState([])

    function handleSubmit(e){
        e.preventDefault()
        if(name && email){
            const data = {
                id: new Date().getTime(),
                personName : name,
                personEmail : email
            }
            setPerson(function(item){
                return [ ...item, data]
            })
            setEmail('')
            setName('')
        }
        else console.log("Form empty")
    }

    console.log(person)

    const ele = person.map(function(item){
        return (
            <div key={item.id}>
                <h4>{item.personName}</h4>
                <p>{item.personEmail}</p>
                <p>{item.id}</p>
            </div>
        )
    })

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <label htmlFor = "name">Name: </label>
            <input type='text' name='name' id ="name" value={name} onChange={(e) => setName(e.target.value)}/>

            <label htmlFor = "mail">Email: </label>
            <input type='text' name='email' id ="mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button>submit</button> 
        </form>
        {ele}
    </div>
  )
}

export default Controlled