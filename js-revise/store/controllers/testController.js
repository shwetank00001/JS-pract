const name = (req,res) => {

    const value = true

    if(value){
        try {
            res.send("name")
        } catch (error) {
            res.send(error)
        }
    }
}

const age = (req,res) => {
    res.send("age ")
}


module.exports = {
    name,
    age
}