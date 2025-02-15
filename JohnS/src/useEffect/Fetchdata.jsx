import React, {useState, useEffect} from 'react'

const Fetchdata = () => {
    const url = "https://api.github.com/users"

    const [users, setUsers ] = useState([])

    const getData = async function(){
        const data = await fetch(url)
        const newData = await data.json()
        console.log(newData)
        setUsers(newData)
    } 
    useEffect(() => {
        getData()
    }, [])
  return (
    <>
    <h2>Github Users</h2>
    {
        users.map(function(item){
            return (
                <li key={item.id}>
                <h4>{item.login}</h4>
                <pre>{item.node_id}</pre>
                </li>

            )
        })
    }
    </>
  )
}

export default Fetchdata