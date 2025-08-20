import { useContext } from "react"
import { globalContext } from "./globalContext"

const Child1= () => {
  const {color} = useContext(globalContext)

  const styles = {
    backgroundColor : color
  }

  return (
    <div style={styles}>
      <p>Content for child1</p>
    </div>
  )
}

export default Child1