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


async function getSingleThings( req,res, next){
    
    try {
        const thing = await Things.findById(req.params.id)

        if(!thing){
            return next( new Error("Item not in DB"))
        }

        res.status(200).json({
            success : true,
            thing
        })
        
    } catch (error) {
        return next( new Error("Can not get items due to internal error"))
    }
}


async function deleteThings ( req, res, next) {
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
        return next(new Error("Item not present !"))
    }
}

async function updateThings ( req, res ) {
    try {
        let thing = await Things.findById(req.params.id)
        console.log(req.params.id)

        thing = await Things.findByIdAndUpdate(req.params.id, req.body)


        res.status(200).json({
            success : true,
            thing
        })
    } catch (error) {
        res.json({
            success : false,
            message: error
        })
    }
}


module.exports = {
    createThing,
    showThings,
    getSingleThings,
    deleteThings,
    updateThings
}