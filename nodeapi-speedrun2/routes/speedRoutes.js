const express = require('express')
const route = express.Router()
const { getAllSpeedData , getOneSpeedData, addSpeedData, deleteAllSpeedData, updateAllSpeedData} = require('../controllers/speedController')

route.get("/allData", getAllSpeedData);
route.get('/:id', getOneSpeedData)
route.post('/enterSpeedData', addSpeedData)
route.delete('/delete/:id', deleteAllSpeedData)
route.put('/updateSpeed/:id', updateAllSpeedData)

module.exports = route