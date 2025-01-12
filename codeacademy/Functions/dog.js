const myAge = 24;
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

let laterYears = myAge - 2;
laterYears = laterYears * 4;
console.log(earlyYears);
console.log(laterYears);

const myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

const name = "SHWETAnk";
console.log(name.toLowerCase());

console.log(
    `My name is ${name}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
