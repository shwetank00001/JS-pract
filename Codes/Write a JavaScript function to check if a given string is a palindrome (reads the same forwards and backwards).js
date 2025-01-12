function isPal(val){
    const newVal = val.split('').reverse().join('')
    console.log(newVal)

    if (newVal === val){
        console.log("isPalindrome")
    }
    else console.log("is Not Palindrome");
}

isPal("aba")

function smallPal(value){
    if (value === value.split('').reverse().join('')){
        console.log("Pal")
    }
}

smallPal("aba")