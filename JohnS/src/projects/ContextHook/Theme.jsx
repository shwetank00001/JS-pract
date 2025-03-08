import React from 'react'
import ThemeHome from './ThemeHome'
import { themeContext } from './themeContext'

const Theme = () => {
    const [color, setColor] = React.useState()

    function red(){
        setColor('red')
    }
    
  return (
    <div>
        <themeContext.Provider value={{color,setColor}}>
            <h1>Select Any color of your liking</h1>
            <button onClick={red}>🔴</button>
            <button onClick={() => setColor('yellow')}>🟡</button>
            <button onClick={() => setColor('blue')}>🔵</button>
            <button onClick={() => setColor('purple')}>🟣</button>
            <ThemeHome />
        </themeContext.Provider>
    </div>
  )
}

export default Theme