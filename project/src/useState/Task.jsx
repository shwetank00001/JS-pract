import React, { useState } from 'react'
import './task.css'

const Task = () => {

  const [task, setTask] = useState();
  const [taskList, setList] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    setList(function(item){
      const newTask = {id : new Date().getTime(), task: task}
      return [...item, newTask]
    })
    setTask('')
    console.log(task)
  }

  console.log(task)

  function remove(idParam){
    setList(function(item){
      return taskList.filter((item) => item.id !== idParam)
    })
  }
  function update(itemParam){
    setTask(itemParam.task)
  }

  const renderList = taskList.map(function(item){
    return (
      <div key={item.id}>
        <p>{item.task}</p>
        <button onClick={() => {remove(item.id)}}>Del</button>
        <button onClick={() => {update(item)}}>Upd</button>
      </div>
    )
  })

  return (
    <div className='main-task'>
      <h1>Task Manager: With crud</h1>
      <div>
        <h3>Add a Task:</h3>
        <form onSubmit={handleSubmit}>
          <input type='name' placeholder='add..' value={task} onChange={(e) => setTask(e.target.value)} />
          <button type='submit'>Add</button>
        </form>
      </div>
      {renderList}
    </div>
  )
}

export default Task