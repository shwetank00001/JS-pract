const mongoose = require('mongoose')



async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://shwetank:shwetank@user.hwzup3y.mongodb.net/?retryWrites=true&w=majority")
        console.log("Connected to DB !")
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB()