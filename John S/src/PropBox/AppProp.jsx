import React from 'react'
import Header from './Header'
import Body from './Body'

const AppProp = () => {
    const [user, setUser] = React.useState("Shwetank")
  return (
    <div>
        <Header userProp = {user}/>
        <Body userProp = {user}/>
    </div>
  )
}

export default AppProp