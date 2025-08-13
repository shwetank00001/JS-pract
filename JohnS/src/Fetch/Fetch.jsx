import React, {useEffect, useState, useReducer} from 'react'
import './style.css'
import Loading from './Loading';

function Fetch(){
    const [productList, setList] = useState([])
    const [maxPrice, setMaxPrice] = useState([])
    // const maxNumber = maxPrice.reduce((max, num) => (num > max ? num : max), maxPrice[0]);
    const url = "https://67bf5cc8b2320ee0501381f5.mockapi.io/ecom";
    // const url = "https://fakestoreapi.com/products";

    let getData =  async () => {
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setList(jsonData)
            // setLoading(false)
            console.log(jsonData.map(item => item.price))
            setMaxPrice(jsonData.map(item => item.price))
            
            setMaxPrice(jsonData.price)
        } catch (error) {
            console.log(error)
        }
    }

    function debounce(apiParam, delay){
        let timer;
        return function(){
            let context = this,
            args = arguments;
            clearTimeout(timer)
            timer = setTimeout(() => {
                apiParam.apply(context,args)
            }, delay)
        }
    }

    function bringLoading(){
        setLoading(true)
    }
    useEffect(() => {
        getData();
        window.addEventListener("mouseover", debounce(bringLoading, 5000))
    }, [])

    console.log("->", productList)

    const [newTitle, setTitle] = useState()
    const [newDesc, setDesc] = useState()
    const [newRating, setRating] = useState()
    
    const [isLoading, setLoading] = useState(false)

    // -----------------------------REDUCER-----------------
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

    // RENDERING MY REDUCER 
    const addedDataList = state.list.map(function(item){
        return (
            <div className='heroItem' key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p>{item.rating}</p>
                <button onClick={ () => remove(item.id)}>Remove</button>
                <br/>
                <hr/>
            </div>
        )
    })

    //FORM SUBMIT BUTTON
    const submit = function(e){
        e.preventDefault()
        console.log(newTitle)
        const newData = {
            id: new Date().getTime(), title : newTitle, rating: newRating, desc: newDesc
        }
        dispatch({type:"add", payload: newData})
        setDesc('')
        setRating('')
        setTitle('')
    }

        let remove = function(itemParam){
            dispatch({type: "remove", payload:itemParam})
        }

    return(
        <div className='hero'>
        {isLoading ? <Loading /> :  <>
        <h1>Max Price of the item is: {}</h1>
            <form className='formStyle' onSubmit={submit}>
                
                <label htmlFor='title'>Title: </label>
                <input id='title' name='newInput' value={newTitle} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='A title..' />
                
                <label htmlFor='desc'>Description: </label>
                <input id='title' name='newDesc' value={newDesc} onChange={(e) => setDesc(e.target.value)} type='text' placeholder='Description..' />
                
                <label htmlFor='rating'>Rating:</label>
                <input id='rating' name='newRating' value={newRating} onChange={(e) => setRating(e.target.value)} type='text' placeholder='Rating here...' />
                
                <button type='submit'>Add</button>
            </form>

            <div>
                {addedDataList}
                {productList.map(function(item){
                    return (
                        <div className='heroItem' key = {item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>{item.rating}</p><p>Price: {item.price}</p>
                            <br/>
                            <hr/>
                        </div>
                    )
                })}
            </div>
            </>}
        </div>
    )
}



export default Fetch;