import Author from "./Author"
import Title from "./Title"


const Books = (props) => {
  console.log(props)
  return (
    <div>
        <Author author = {props.author} />
        <Title title = {props.title} />
    </div>
  )
}

export default Books