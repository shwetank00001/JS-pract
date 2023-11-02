const a = [1,2,43,45,5,6,6,6,8,4]
const target = 12

// for ( let i=0; i< a.length; i++ ){
//     if( a[i] + a[i+1] == target){
//         console.log(`Added with ${a[i]} and ${a[i+1]}`)
//     }
// }

for ( let i=0; i< a.length; i++ ){
    for( let j = i-1; j< i; j++){
        console.log(a[i] + a[j])
    }
}