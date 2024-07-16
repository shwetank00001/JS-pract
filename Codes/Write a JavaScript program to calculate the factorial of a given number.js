// A factorial number is the product of all positive integers, which are equal to or less than the given number.  

function factorial(number) { 

  if (number === 0 || number === 1) { 

    return 1; 

  } else { 

    console.log(number * factorial(number - 1)) 

  } 

} 

factorial(5)