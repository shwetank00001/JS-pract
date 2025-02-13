class Details {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings() {
    console.log(`My name is ${this.name} and age is: ${this.age}`);
  }
}

//this refers to the instance. person1 is an instance of the class
const person1 = new Details("Shwetank", 24);
person1.greetings();
console.log(person1 instanceof Details);
