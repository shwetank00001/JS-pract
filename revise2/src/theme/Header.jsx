import { themeContext } from "./themeContext"
import { useContext } from "react"

const Header = () => {

  const {color} = useContext(themeContext);
  const styleSheet = {
    backgroundColor: color
  }
  return (
    <div style={styleSheet}>Header</div>
  )
}

export default Header