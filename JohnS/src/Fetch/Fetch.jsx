import React, {useEffect} from 'react'

function Fetch(){
    const [productList, setList] = React.useState([])
    const url = "https://fakestoreapi.com/products";

    let getData =  async () => {
        try {
            const data = await fetch(url);
            const jsonData = await data.json();
            setList(jsonData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    console.log("->", productList)

    return(
        <div>
            {productList.map(function(item){
                return (
                    <div key = {item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.rating.count}</p>
                        <pre>{item.title}</pre>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Fetch;