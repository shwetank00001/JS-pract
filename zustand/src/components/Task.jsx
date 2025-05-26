import './task.css'

const Task = (props) => {
  const STATS = "PLANNED";

  return (
    <div className='task'>
      <div>
        
        {props.task}    
      </div>
      <div className='stats'>
        {STATS}
      </div>
    </div>
  )
}

export default Task