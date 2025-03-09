import React from 'react'
import ModalRevise from './ModalRevise';

const ReducerRevise = () => {

    const [todo, setTodo] = React.useState()
    // const [isUpdate, setUpdate] = React.useState(false)
    const [updatedData,setUpdatedData] = React.useState()

    const submit = (e) => {
        e.preventDefault();
        console.log(todo)
        setTodo('')
        const newData = {id: new Date().getTime(), data: todo}
        dispatch({type:"ADD", payload: newData})
    }

    function reducer(state, action){
        if(action.type ==="ADD"){
            const newValue = [...state.list, action.payload]
            return {
                list: newValue,
                modalContent: "Item has been added in the Todo section!",
                modalOpen: true,
            }
        }
        if(action.type ==="del"){
            const newValue = state.list.filter(function(item){
                return item.id !== action.payload
            })
            return {
                list: newValue,
                modalContent: "Item has been delete from the Todo section!",
                modalOpen: true,
            }
        }
        if(action.type ==="upd"){

        }
    }

    const defaultState = {
        list: [],
        modalContent: "This is the modal",
        modalOpen: true,
    }
    const [state, dispatch ] = React.useReducer(reducer, defaultState)

    function remove(idParam){
        dispatch({type:"del", payload:idParam})
    }

    function update(idParam , updatedData){
        setUpdatedData(item)
    }

    const eleList = state.list.map(function(item){
        return (
            <div key={item.id}>
                <p >{item.data}</p>
                <button onClick={() => remove(item.id)}>-</button>

                <input type='Update todo' value={updatedData} onChange={(e) => setUpdatedData(e.target.value)} />
                <button onClick={() => update(item.id)}>Update</button>
            </div>
        )
    })

  return (
    <div>
        {state.modalOpen && <ModalRevise contentProp = {state.modalContent}/> }
        <h1>This is a Todo List with Update feature!    </h1>
        <form onSubmit={submit}>
            <input type='Add a todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
        {eleList}
    </div>
  )
}

export default ReducerRevise