import { useEffect, useState } from "react"
import useFetch from "./useFetch"

function Dashboard() {

  const url = 'https://pokeapi.co/api/v2/pokemon'

  // const [pokeData, setPokeData] = useState([]);

  // useEffect(() => {
  //   async function getData(){
  //     try {
  //       const data = await fetch(url);
  //       const resp = await data.json()
  //       setPokeData(resp.results);
  //     } catch (error) {
  //       console.log("Error fetchinng data", error)
  //     }
  //   }
  //   getData();
  // }, []);

  const {mainData} = useFetch(url);



  // const displayList = mainData.results.map(function(item){
  //   return (
  //     <div key={item.id}>
  //       <h3>{item.name}</h3>
  //     </div>
  //   )
  // })
    return (
      <>
        <h3>Dashboard</h3>
        <p>This page will have details for Pokemons</p>
        {/* {displayList} */}
      </>
    )
  }
  
  export default Dashboard
  