import express, { urlencoded } from 'express'
import mongoose, { Mongoose, mongo } from 'mongoose';

const app = express();



// for reading form data
app.use(express.urlencoded({ extended: false}))



// for reading json data i.e= postman
app.use(express.json())

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

    try {
        const user = await User.find( { })
        console.log(req.query)

        const id = req.query.id
        console.log(id)


        res.send({
            sucess : true,
            user
    })

    } catch (error) {
        res.send(error)
    }

})


//dynamic route

app.get('/userID/:id', async ( req, res) => {
    const id = req.params.id

    const user = await User.findById(id)
    console.log(req.params)

    res.status(200).json({
        success : true,
        user
    }) 


})

app.post('/user/new' , async (req, res) => {

    try {
        const { name, password, email } = req.body

        const user = await User.create({
            name,
            password,
            email
        })
    
    
        res.cookie("temp cookie", "lol").json( {
            success : true,
            message: "Added Successfully"
        })
    } catch (error) {
        res.send(error)
    }


})



app.listen(5000, () => {
    console.log("SV RUNNING")
})