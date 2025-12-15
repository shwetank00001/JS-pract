import { useEffect, useState } from "react";

const Data = () => {

    const url = "https://jsonplaceholder.typicode.com/todos/";
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                const allData = await fetch(url);
                const response = await allData.json();
                setApiData(response);
            } catch (error) {
                console.log("Error X")
            }
        }
        getData()
    }, [])
    console.log(apiData)

    const dataDis = apiData.map((i) => {
        return (
            <>
                <h4>{i.title}</h4>
            </>
        )
    })
  return (
    <div>
        {dataDis}
    </div>
  )
}

export default Data