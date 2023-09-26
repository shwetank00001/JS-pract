const express = require('express')
const { createThing, showThings, getSingleThings, deleteThings } = require('../controller/thingController')
const route = express.Router()


route.post('/add-thing', createThing)
route.get('/all-things', showThings)
route.get('/single-things/:id', getSingleThings)
route.delete('/delete-thing/:id', deleteThings)


module.exports = route