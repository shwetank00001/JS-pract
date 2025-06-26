import React from 'react';
import Welcome from './Welcome';
import People from './People'
import SinglePerson from './SinglePerson'

import {Routes, Route} from 'react-router'

export default function Home(){
    return (
        <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/people' element={<People/>} />
            <Route path='/people/:name' element={<SinglePerson/>} />     
        </Routes>
    )
}