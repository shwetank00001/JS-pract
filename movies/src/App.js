import React from 'react'
import Auth from './components/Auth'
import Movies from './components/Movies'
import { Route,Routes } from 'react-router'
import { GlobalContext } from './components/globalContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Error from './components/Error'

const App   = () => {
  
  const [isAuth, setAuth] = React.useState(false)


  return (
    <div>
      <GlobalContext.Provider value={{isAuth, setAuth}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/movies' element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>            
            } />
          <Route path='*' element={<Error />} />
        </Routes>
      </GlobalContext.Provider>
    </div>
  )
}

export default App