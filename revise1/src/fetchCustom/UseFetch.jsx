import React, {useEffect, useState} from "react";

export default function useFetch(url) {

  const [fetchedData, setFetchedData] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(url);
        const response = await data.json();
        setFetchedData(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [url]);

  console.log("Fetched", fetchedData)
  
  return {fetchedData}
}
