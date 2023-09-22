const express = require('express')
const app = express()
require("./db/connect")
const users = require('./routes/userRoutes')


app.use("/api/v1/user", users)


app.listen(5000, () => {
    console.log("SV on port 5000")
})