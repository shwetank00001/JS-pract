// Say you have a website and want to take a user’s username to make a personalized greeting. 
// Sometimes, the user does not have an account, making the username variable falsy. 
// The code below checks if username is defined and assigns a default string if it is not:

let username = ""
let name;

if(username){
    name = username
}
else{
    name = "Stranger"
}
console.log(`Hi! ${name}`)

//////////////
let defaultName = username || "Unknown"
console.log(`Hello ${defaultName}`)

/////////////////

let tool = "marker";

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);