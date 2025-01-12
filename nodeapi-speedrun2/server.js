const express = require('express');
require('./db/connect')
const speed = require('./routes/speedRoutes')

const app = express()
app.use(express.urlencoded({ extended: false }));


//from Postman
app.use(express.json())

app.get('/',(req,res) => {
    res.send("Hello");
})
app.use('/speed', speed)

app.listen(5000, ()=> {
    console.log('App is on Port 5000')
})