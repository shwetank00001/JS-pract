import React from 'react'

const useFetch = (url) => {

    const [allData, setData] = React.useState([]);
    
    React.useEffect(() => {
        async function getData(){
            try {
                const fetchedData = await fetch(url);
                const data = await fetchedData.json();
                console.log(data);
                setData(data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, []);

  return {allData}
}

export default useFetch