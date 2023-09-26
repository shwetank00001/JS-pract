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
        return next(new Error("Cant write Data !"))
    }
}


async function showThings(req,res){
    const thing = await Things.find({})
    res.json({
        success: true,
        thing 
    })
}


async function getSingleThings( req,res){
    

    try {

        const thing = await Things.findById(req.params.id)

        if(!thing){
            res.send("Item Not Present in DB !")
            console.log("Item Not Present in DB !")
        }

        res.status(200).json({
            success : true,
            thing
        })
        
    } catch (error) {
        console.log(error)  
    }
}


async function deleteThings ( req, res) {
    try {
        const thing = await Things.findByIdAndDelete(req.params.id)
        if(!thing){
            res.send("Item Not Present in DB !")
            return
        }

        res.status(200).send({
            success : true,
            msg: "Item Deleted from DB ! ",
            thing
        })

    } catch (error) {
        res.send("Item Can not be deleted !")
    }
}

async function updateThings ( req, res ) {
    try {
        const thing = await Things.findById(req.params)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    createThing,
    showThings,
    getSingleThings,
    deleteThings
}