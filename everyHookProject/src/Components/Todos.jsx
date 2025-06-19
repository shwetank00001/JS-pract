import useFetch from "./useFetch";

function Todo() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const {mainData} = useFetch(url);

    const todoList  = mainData.map(function(item){
        return (
            <div key={item.id}>
                <h2>{item.title}</h2>
            </div>
        )
    })
    return (
      <>
      <h4>This is the todo component!!!</h4>
      {todoList}
      </>
    )
  }
  
  export default Todo
  