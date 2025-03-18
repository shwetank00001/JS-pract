import React, { useState } from 'react'
import './task.css'

const Task = () => {

  const [task, setTask] = useState();
  const [taskList, setList] = useState([])

  const [isChecked, setChecked] = useState(false)

  function handleSubmit(e){
    e.preventDefault();
    setList(function(item){
      const newTask = {id : new Date().getTime(), task: task}
      return [...item, newTask]
    })
    setTask('')
  }


  function remove(idParam){
    setList(function(item){
      return taskList.filter((item) => item.id !== idParam)
    })
  }

  function updateCheckBox(idParam){
    if(idParam){
      setChecked(true)
    }
    console.log(idParam)
  }

  const styles = {
    textDecoration :isChecked? "line-through" : "none"
  }
  const renderList = taskList.map(function(item){
    return (
      <div key={item.id}>
        <p style={ styles}>{item.task}</p>
        <input type='checkbox' checked={isChecked} onChange={() => updateCheckBox(item.id)} />
        <button onClick={() => {remove(item.id)}}>Del</button>
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