import React, {useState} from 'react'
import { peopleData } from './data'
import { Link } from 'react-router'

const People = () => {
    const [peoples, setPeople] = useState(peopleData)

    const peopleList = peoples.map(function(item){
        return (
            <ol key={item}>
                <Link to={`/people-profile/${item}`}>{item}</Link>
            </ol>
        )
    })
  return (
    <>
    {peopleList}
    </>
  )
}

export default People