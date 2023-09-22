const userModel = require('../model/userSchema')

async function createUser( req, res ){
    try {
        const user = await userModel.create(req.body)
        res.send(user)
        console.log(req.body)
    } catch (error) {
        res.send(error)
    }
}


async function showUser(req,res){
    try {
        const user = await userModel.find()
        res.send(user)
        console.log(user)
    } catch (error) {
        res.send(error)
    }
}


module.exports = {
    createUser,
    showUser
}