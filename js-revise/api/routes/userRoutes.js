const express = require('express')
const { showUser, createUser } = require('../controllers/userController')
const route = express.Router()

route.get("/all-users", showUser)
route.post("/new-user", createUser)

module.exports = route