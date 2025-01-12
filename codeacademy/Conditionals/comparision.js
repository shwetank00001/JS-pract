let hungerLevel = 7;

if (hungerLevel > 7) {
    console.log("Time to eat!");
} else {
    console.log("We can eat later!");
}


let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
    console.log("time to sleep");
} else {
    console.log("not bed time yet");
}


// truth and false ---

// 0
// Empty strings like "" or ''
// null which represent when there is no value at all
// undefined which represent when a declared variable lacks a value
// NaN, or Not a Number

let wordCount = 1;

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log("Better get to work!");
}

let favoritePhrase = "";

if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log("This string is definitely empty.");
}