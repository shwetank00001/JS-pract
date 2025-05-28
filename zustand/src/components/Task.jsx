import './task.css'
import { useStore } from '../store';

const Task = (props) => {
  const STATS = "PLANNED";

  const tasks = useStore(globalState => globalState.tasks.filter(item => item.status === props.taskStatus));
  // const ele = tasks.map(item => console.log(item.status));

  console.log(tasks)

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