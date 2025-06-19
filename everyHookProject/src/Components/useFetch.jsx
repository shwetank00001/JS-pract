import { useEffect, useState } from "react";


export default function useFetch(url){
    const [mainData, setMainData] = useState([]);

    useEffect(() => {
      async function getData(){
        try {
          const data = await fetch(url);
          const resp = await data.json()
          setMainData(resp);
        } catch (error) {
          console.log("Error fetchinng data", error)
        }
      }
      getData();
    }, []);

    return {mainData}
}