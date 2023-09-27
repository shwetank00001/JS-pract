function errorMiddleware( err, req, res, next){
    res.status(400).json({
        success : false,
        message : err.message
    })
}


module.exports = errorMiddleware