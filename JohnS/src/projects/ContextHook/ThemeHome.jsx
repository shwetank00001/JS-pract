import React from 'react'
import { themeContext } from './themeContext'

const ThemeHome = () => {
    const {color} = React.useContext(themeContext)

    const styles = {
        backgroundColor : color,
        padding : "5px"
    }
  return (
    <div style={styles}>
        <h3>This is the theme Home</h3>
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, culpa!</p>
        </div>
    </div>
  )
}

export default ThemeHome