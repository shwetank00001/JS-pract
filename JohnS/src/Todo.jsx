import React from 'react'

const Todo = () => {
    const [list, setList] = React.useState([])
    const [task, setTask] = React.useState([])

    const handleSubmit = function(e){
        e.preventDefault();
        const newTask = {
            id: new Date().getTime(),
            task: task
        }
        setList(function(item){
            return [...item, newTask]
        })
    }
    
    let del = function(idParam){
        const newData = list.filter(function(item){
            return item.id !== idParam
        })
        setList(newData)
    }

    const ele = list.map(function(item){
        return (
            <div key= {item.id}>
                {item.task}
                <button onClick={() => del(item.id)}>Delete</button>
            </div>
        )
    })

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='task' value={task} onChange={(e) => setTask(e.target.value)} />
            <button type='submit'>ADD</button>
        </form>
        {ele}
    </div>
  )
}

export default Todo