const mongoose = require('mongoose')

const thingsSchema = new mongoose.Schema( {
    name: String,
    type: String,
    price: Number
})

module.exports = mongoose.model("Things", thingsSchema)