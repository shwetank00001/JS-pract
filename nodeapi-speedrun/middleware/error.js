function errorMiddleware( err, req, res, next){

    err.message = err.message || "Internal Server Error"
    res.status(400).json({
        success : false,
        message : err.message
    })
}


module.exports = errorMiddleware