import React from 'react'
import { useContext } from 'react';
import { themeContext } from './themeContext';
const ThemeBar = () => {

  const {color, setColor} = useContext(themeContext);

  function showColor(colorParam){

  }
  console.log(color)
  return (
    <div>
        <h1>This will have multiple colors</h1>
        <p onClick={() => showColor(setColor('Red'))}>Red</p>
        <p onClick={() => showColor(setColor('Blue'))}>Blue</p>
        <p onClick={() => showColor(setColor('Yellow'))}>Yellow</p>
        <p onClick={() => showColor(setColor('Green'))}>Green</p>
        <p onClick={() => showColor(setColor('Pink'))}>Pink</p>
        <p onClick={() => showColor(setColor('Purple'))}>Purple</p>
    </div>
  )
}

export default ThemeBar