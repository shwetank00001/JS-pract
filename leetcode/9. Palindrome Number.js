let n = 121
var isPalindrome = function(x) {
    let a = x.toString();
    if (a === a.split('').reverse().join('')){
        console.log(true)
       
    }
    else console.log(false)
};

isPalindrome(n)