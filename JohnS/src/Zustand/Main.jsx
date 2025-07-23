import { useState } from 'react'
import useTodoStore from './store'


const Main = () => {
    const [valueInput, setValue] = useState('');

    const addTodo = useTodoStore((globalState) => globalState.addTodo)


    function handleAdd(e){
        e.preventDefault();
        addTodo({
            id: new Date().getTime,
            todoName: valueInput
        })
    }
    return (
        <form onSubmit={handleAdd}>
            <input value={valueInput} onChange={e => setValue(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    )
}

export default Main