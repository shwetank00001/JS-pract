
let obj1= {
    a: 5,
    x: () => {
        console.log(this)
    }
}

obj1.x();