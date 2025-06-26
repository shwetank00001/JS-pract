import { useState } from 'react'
import {person} from './personsData'
import { Link } from 'react-router';

export default function People(){

    const [personList, setList] = useState(person);

    const ele = personList.map(function(item){
        return (
            <div>
                <Link to={`/people/${item.title}`}>{item.title}</Link>
            </div>
        )
    })
    return (
        <>
            <h5>List of all the people we have</h5>
            {ele}
        </>
    )
}