import React, { useEffect, useState } from 'react'

const Search = () => {
  const [searchData, setData] = useState('');
  const [fetchedData, setFetchedData] = useState([]);
  

  const url = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    async function getData(){
      try {
        const data =  await fetch(url);
        const resp = await data.json();
        setFetchedData(resp);
        console.log(fetchedData)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [])

  console.log(fetchedData);

  function handleSearch(e){
    e.preventDefault();
    console.log("Value", searchData);
    // const mySearch = fetchedData.filter((item) => item.name === searchData);
    // setFilter(mySearch)

      // var data = filteredDataTry.map(function(item){
      //   return (
      //     <div>
      //       {item.name}
      //     </div>
      //   )
      // })
  }

      const filteredDataTry = fetchedData.filter(item => item.name.toLowerCase().includes(searchData));
      console.log("filteredDataTry", filteredDataTry);



  const commentsDisplay = fetchedData.map(function(item){
    return (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <h4>{item.email}</h4>
        <p>{item.body}</p>
      </div>
    )
  });

  // const filteredComments = filteredData.map(function(item){
  //   return (
  //     <div>
  //       <p>{item.name}</p>
  //     </div>
  //   )
  // })


  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type='text' placeholder='search for something' value={searchData} onChange={(e) => setData(e.target.value)}/>
        <button type='submit'>Search</button>
      </form>
      {commentsDisplay}

      <div>
        <h3>Filtered Data:</h3>
        {
          filteredDataTry.map(function(item){
            return <p>{item.name}</p>
          })
        }
      </div>
    </div>
  )
}

export default Search