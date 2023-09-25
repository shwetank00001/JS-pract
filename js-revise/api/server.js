import express from 'express'
import mongoose, { Mongoose, mongo } from 'mongoose';

const app = express();

async function connected(){
    try {
        await mongoose.connect("mongodb+srv://shwetank:shwetank@api.uuk0xvd.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser:true
        })
        console.log("Connected to the Database")
    } catch (error) {
        console.log("Failed to Connect to the Mongo Database", error)
    }
}

connected()


const schema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const User = mongoose.model("User", schema)

app.get('/' ,  (req,res) => {
    res.send("Test")
})

app.get('/users/all', async(req,res)=> {

    const user = await User.find( { })

    res.json({
        sucess : true,
        user
    })
})

app.post('/user/new' , async (req, res) => {

    const user = await User.create({
        name:"Shwetank", 
        password:"21131", 
        email : "Shwetank@gmail.com"
    })

    res.json( {
        success : true,
        message: "Added Successfully"
    })
})



app.listen(5000, () => {
    console.log("SV RUNNING")
})