function maxNum(n){
    console.log(Math.max(...n))
}

maxNum([5,42,2,4,2,46,3,7,7,24,54,676])

// The issue arises because Math.max() does not accept an array directly as an argument. Instead, it expects individual numbers. When you pass an array to Math.max(), it tries to interpret it as a single value, leading to NaN (Not-a-Number).

// To resolve this, you can use the spread operator (...) to spread the elements of the array as individual arguments to Math.max():