import React, { useState } from 'react';
import { data } from './jokesData';
import Jokes from './Jokes';

export default function JokesMain(){

    const [jokesList, setList] = useState(data);

    const eleList = jokesList.map(function(item){
        return <Jokes title ={item.title} age ={item.age}  />
    })
    return (
        <div>
            {eleList}
        </div>
    )
}