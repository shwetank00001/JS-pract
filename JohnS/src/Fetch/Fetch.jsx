import React, {useEffect, useState, useReducer} from 'react'
import './style.css'

function Fetch(){
    const [productList, setList] = useState([])
    const url = "https://fakestoreapi.com/products";

    const [newTitle, setTitle] = useState()

    function reducer(state, action){
        if(action.type === "add"){
            const value = [...state.list, action.payload]
            return {
                list: value
            }
        }
        if(action.type === "remove"){
            const value = state.list.filter(function(item){
                return item.id !== action.payload
            })
            return {
                list: value
            }
        }
    }
    const defaultState = {
        list: []
    }

    const [state, dispatch] = useReducer(reducer, defaultState)

    const addedDataList = state.list.map(function(item){
        return (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <button onClick={ () => remove(item.id)}>Remove</button>

            </div>
        )
    })

    let getData =  async () => {
        try {
            const data = await fetch(url);
            const jsonData = await data.json();
            setList(jsonData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    console.log("->", productList)

    const submit = function(e){
        e.preventDefault()
        console.log(newTitle)
        const newData = {
            id: new Date().getTime(), title : newTitle
        }
        dispatch({type:"add", payload: newData})
    }
    
    let remove = function(itemParam){
        dispatch({type: "remove", payload:itemParam})
    }

    return(
        <div className='hero'>
            <form onSubmit={submit}>
                <input name='newInput' value={newTitle} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='A new Item to the list..' />
                <button type='submit'>Add</button>
            </form>
            <div>
                {addedDataList}
            {productList.map(function(item){
                return (
                    <div className='heroItem' key = {item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.rating.count}</p>
                        <pre>{item.description}</pre>
                                        <br/>
                                        <hr/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}



export default Fetch;