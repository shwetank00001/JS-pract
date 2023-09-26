const express = require('express')
const { createThing, showThings } = require('../controller/thingController')
const route = express.Router()


route.post('/add-thing', createThing)
route.get('/all-things', showThings)


module.exports = route