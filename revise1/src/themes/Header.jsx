import { useContext } from "react";
import { globalContext } from "./globalContext";
import { Link } from "react-router";

const Header = () => {

  const {color, setColor} = useContext(globalContext)

  function fillCOlor(colorParam){
    setColor(colorParam);
  }
  console.log(color);

  const styles = {
    backgroundColor: color
  }

  return (
    <div>
        <h1>Theme buttons for every child component</h1>
        <div style={styles}>
          <p>This is the head content. I will show the ideology of how themes work across the application.</p>
          <button onClick={() => fillCOlor('orange')}>🟠</button>
          <button onClick={() => fillCOlor('red')}>🔴</button>
          <button onClick={() => fillCOlor('yellow')}>🟡</button>
          <button onClick={() => fillCOlor('green')}>🟢</button>
          <button onClick={() => fillCOlor('blue')}>🔵</button>
          <button onClick={() => fillCOlor('purple')}>🟣</button>
          <button onClick={() => fillCOlor('black')}>⚫</button>
          <button onClick={() => fillCOlor('white')}>⚪</button>
        </div>

        <div>
          <Link to={'/child1'}>Child1</Link>
          <Link to={'/child2'}>Child2</Link>
        </div>
    </div>
  )
}

export default Header