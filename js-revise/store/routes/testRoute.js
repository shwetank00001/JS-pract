const express = require('express')
const { age, name } = require('../controllers/testController')

const route = express.Router()


route.get('/name', name)
route.get('/age', age)

module.exports = route


