const mongoose = require('mongoose')

const speedSchema = new mongoose.Schema({
    carType: String,
    carTopSpeed:Number,
    carYearMake:Number
})

module.exports = mongoose.model("Speed", speedSchema);