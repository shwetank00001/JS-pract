
import useFetch from "./useFetch"
import {Link} from 'react-router'

function Dashboard() {

  const url = 'https://pokeapi.co/api/v2/pokemon'

  const {mainData} = useFetch(url);

  console.log(mainData.results);

  if(mainData.results){
    var displayList = mainData.results.map(function(item){
    return (
      <div key={item.id}>
        <h3>{item.name}</h3>
      </div>
    )
  })
  }

    return (
      <>
        <h3>Dashboard</h3>
        <Link to={'/'}>home page</Link>
        <p>This page will have details for Pokemons</p>
        {displayList}
      </>
    )
  }
  
  export default Dashboard
  