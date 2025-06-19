import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router'
import Signup from './SIgnup'
import Login from './Login'
import Dashboard from './Dashboard'
import Welcome from './Welcome';
// import Todos from './Todos'

const LazyTodo = React.lazy(() => import('./Todos'))
const LazyDashboard = React.lazy(() => import('./Dashboard'))
function Main() {

    return (
        <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/dashboard' element={<Suspense fallback={<h4>Loading Pokedex....</h4>}><LazyDashboard /></Suspense>} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/todos' element={<Suspense fallback={<h3>Loading Data....</h3>}><LazyTodo/></Suspense>} />
        </Routes>
    )
  }
  
  export default Main
  