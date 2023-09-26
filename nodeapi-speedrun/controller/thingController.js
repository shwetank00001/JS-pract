const Things = require('../model/thingsModel')

async function createThing ( req, res, next){

    try {
        
        const { name, type, price } = req.body
        const thing = await Things.create({name, type, price})
        res.status(200).json({
            success : true, 
            thing
        })
    } catch (error) {
        return next(new Error("Cant write Data"))
    }
}


async function showThings(req,res){
    const thing = await Things.find({})
    res.json({
        success: true,
        thing : []
    })
}


module.exports = {
    createThing,
    showThings
}