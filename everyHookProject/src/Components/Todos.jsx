import useFetch from "./useFetch";
import './todo.css'
import {Link} from 'react-router'

function Todo() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const {mainData} = useFetch(url);

    const todoList  = mainData.map(function(item){
        return (
            <div key={item.id}>
                <h4>{item.id}. {item.title}</h4>
            </div>
        )
    })
    return (
      <>
      <div className="todoTop">
        <h2>This is the todo component!!!</h2>
        <Link to={'/'}>Home</Link>
      </div>
      <div className="todoGrid">
        {todoList}    
      </div>
      </>
    )
  }
  
  export default Todo
  