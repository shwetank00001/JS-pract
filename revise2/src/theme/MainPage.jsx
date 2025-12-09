import About from "./About"
import ThemeBar from "./ThemeBar"
import Header from "./Header";
import {Routes, Route} from 'react-router'
import {themeContext} from './themeContext'
import React from "react";

const MainPage = () => {
  const [color, setColor] = React.useState('')
  return (
    <themeContext.Provider value={{color, setColor}}>
      <div>
        <ThemeBar />
        <hr />
        <Header />
        <hr />
        <About />
      </div>
    </themeContext.Provider>
  )
}

export default MainPage