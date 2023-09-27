const express = require('express')
const { createThing, showThings, getSingleThings, deleteThings, updateThings } = require('../controller/thingController')
const route = express.Router()

route.put('/update_thing/:id', updateThings)
route.post('/add_thing', createThing)
route.get('/all_things', showThings)
route.get('/single_things/:id', getSingleThings)
route.delete('/delete_thing/:id', deleteThings)

module.exports = route