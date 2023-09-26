const express = require('express')
require('./db/connect')
const things = require('./routes/thingRoute')


const app = express()

// for reading form data
app.use(express.urlencoded({ extended: false}))



// for reading json data i.e= postman
app.use(express.json())


app.get('/', (req, res, next) => {
    res.send({
        success : true, 
        user: []
    })
})

app.get('/api/v1', things)


app.listen( 5000, () => {
    console.log("App on Port 5000")
})