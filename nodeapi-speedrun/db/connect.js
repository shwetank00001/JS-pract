const mongoose = require('mongoose')

async function connection(){
    try {
        await mongoose.connect("mongodb+srv://shwetank:shwetank@api.uuk0xvd.mongodb.net/?retryWrites=true&w=majority")
        .then(() => console.log("Connected to DB"))
        .catch( (err) => console.log( { msg : err }))
        
    } catch (error) {
        console.log(error)
    }
}

connection()