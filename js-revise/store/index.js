const express = require('express')
const app = express()

const route = require('./routes/testRoute')


app.get('/', (req,res) => {
    res.json("Backend:- ignore")
})
app.use('/api/v1', route)

app.listen( 4000, () => {
    console.log("Server is Running on port 4000")
})


