import { useContext } from "react"
import { globalContext } from "./globalContext"

const Child2 = () => {
  const {color} = useContext(globalContext)

  const styles = {
    backgroundColor : color
  }

  return (
    <div style={styles}>Child2</div>
  )
}

export default Child2