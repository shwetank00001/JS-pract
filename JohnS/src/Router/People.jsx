import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


// this component will be for our dynamic routing ex -> i will creat a
// separate route for each people/user that i Have. /shwetank /swapnil /kunal
const People = () => {
  const nav = useNavigate()
  const [person, setPerson] = useState(['swapnil','shwetank', 'kunal', 'manoj'])

  // so as soon as I click on a name -> we will be directed to /user-profile/shwetank LINk
  // but since we dont have this particular page. we will be sent to ERROR page
  //  we will set up this   <Route path='/user-profile/:name' element={<Userprofile/>} />
  // now in the USerProfile if i want to use :name, i will use-> useParams hooks

  const personList = person.map(function(item){
    return <Link key={item} to={`/user-profile/${item}`}>
      <h3>{item}</h3>
    </Link>
  })

  const goToLink = () => {
    nav("/")
    // window.open= ("https://google.com", "_blank")
  }
  return (
    <div>
      <h2>Clicking to the names will show you their respective details of this user: </h2>
      <ol>
        <li>
        {personList}
        </li>
      </ol>
      <button onClick={goToLink}>Go to google india</button>
    </div>
  )
}

export default People