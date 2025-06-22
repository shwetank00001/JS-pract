import React, {Suspense, useState} from 'react';
import {Route, Routes} from 'react-router'
import Signup from './SIgnup'
import Login from './Login'
import Dashboard from './Dashboard'
import Error from './Error';
import Welcome from './Welcome';
// import Todos from './Todos'
import ProtectedRoute from './ProtectedRoute'

import {ErrorBoundary, useErrorBoundary} from 'react-error-boundary'

const LazyTodo = React.lazy(() => import('./Todos'))
const LazyDashboard = React.lazy(() => import('./Dashboard'))

import {globalContext} from './globalContext'

function Main() {
    const [auth, setAuth] = useState(false);
    // const {resetBoundary} = useErrorBoundary();
    function showFallBackError({error}){
        return (
            <div>
                <p>Something went wrong: {error.message}</p>
            </div>
        )
    }

    function showErrorLogs(error, info){
        console.log(JSON.stringify(info));
    }


    return (
        <globalContext.Provider value={{auth, setAuth}}>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/dashboard' element={<ErrorBoundary fallbackRender={showFallBackError} onError={showErrorLogs}><ProtectedRoute><Suspense fallback={<h4>Loading Pokedex....</h4>}><LazyDashboard /></Suspense></ProtectedRoute></ErrorBoundary>} />
                {/* <Route path='/dashboard' element={<ErrorBoundary fallback={<Error />}><ProtectedRoute><Suspense fallback={<h4>Loading Pokedex....</h4>}><LazyDashboard /></Suspense></ProtectedRoute></ErrorBoundary>} /> */}
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/todos' element={<Suspense fallback={<h3>Loading Data....</h3>}><LazyTodo/></Suspense>} />
                <Route path='*' element={<Error />}/>
            </Routes>
        </globalContext.Provider>
    )
  }
  
  export default Main
  