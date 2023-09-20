class Test{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Test2 extends Test{
    constructor(name, age, loc){
        super(name,age)
        this.loc = loc
    }

}

const a = new Test("SHwetank", 23)
const b = new Test2("Mishra", 24, "Noida")
console.log(a)
console.log(b)