import './column.css'
import Task from './Task'
const Column = (props) => {
  return (
    <div className='column'>
        <h3>Column for {props.state}</h3>
        <Task taskStatus= "Todo"/>
    </div>
  )
}

export default Column