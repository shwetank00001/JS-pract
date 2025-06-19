import React, {useState, useEffect} from 'react'

const useFetch = (url) => {

    const [commonData, setCommonData] = useState([]);

    useEffect(() => {
        async function getTodos(){
            try{
                const data = await fetch(url);
                const response =  await data.json();
                setCommonData(response);
                console.log(response)
            }
            catch(err){
                console.log(err)
            }
        }
        getTodos();
    }, [url]);

     
  return {commonData}
}

export default useFetch