import React from 'react'
import useFetch from './useFetch';

const Users = () => {
    const url = "https://dummyjson.com/users";
    const {allData} = useFetch(url);

    const finalAllData = allData?.users || []
    
    const ele  = finalAllData.map(function(item){
      return (
        <div>
          <h2>{item.firstName}</h2>
          <p>{item.gender}</p>
          <hr />
        </div>
      )
    })
  return (
    <div>
        {ele}
    </div>
  )
}

export default Users