
let obj1= {
    a: 5,
    x: () => {
        const y = () => {
            console.log(this)
        }
        y();
    }
}

obj1.x();