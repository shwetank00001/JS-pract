import React from 'react'
import './weather.css'

const WeatherApi = () => {
    const [param, setParam] = React.useState("Paris")
    const url = `http://api.weatherstack.com/current?access_key=95270665990b508575436b32461c4c71&query=${param}`

    const [allData, setData] = React.useState([])
    const [city, setCity] = React.useState("")


    const ele =  allData.map(function(item){
        return (
            <div key={item.id}>
                <h1 style={{display:"flex", justifyContent: "center"}}>Weather forecasting for {item.location.region}</h1>
                <img src={item.current.weather_icons} />
                <h2>Today's weather is most likely to be: {item.current.weather_descriptions[0]}</h2>
                <h4>Temperature: {item.current.temperature} °C</h4>
                <h4>Humidity: {item.current.humidity} </h4>
                <h4>Temperature measured at: {item.location.localtime} </h4>
                <h4>Pressure: {item.current.pressure} </h4>
                <h4>UV index: {item.current.uv_index}</h4>
                <h4>Windspeed: {item.current.wind_speed}</h4>
                <h4>Visibility: {item.current.visibility}</h4>
                <h3>Country: {item.location.country}</h3>

            </div>
        )
    })


    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(url);
            const resp = await data.json();
            setData(function(item){
                return [ resp]
            })
        }
        fetchData()
    }, [url])

                
    console.log("data", allData)

    function searchit(e){
        e.preventDefault();
        setParam(city)
    }
  return (
    <div className='weatherMain'>
        <div className='weatherChild'>
            Search for city: <input type='text' placeholder='city name..' value={city} onChange={(e) => setCity(e.target.value)}  />
            <button onClick={searchit}>Search</button>
        </div>
        {ele}
    </div>
  )
}

export default WeatherApi