function evenArr(arr){
    const newArr = []
    for(i=0; i < arr.length; i++){
        console.log(arr[i])
        if(arr[i]%2==0){
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

evenArr([4,3,1,3,4,2,334,22,1])

function filteredArr(arr){
    console.log(arr.filter(item => item%2==0))
}

filteredArr([4, 3, 1, 3, 4, 2, 334, 22, 1]);


