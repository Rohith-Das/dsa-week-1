///// sum of natural numbers ////////////// 

// function sumOfNatuaralNumners(n){
//     if(n <0){
//         return false
//     }
//     else{
//         return n + sumOfNatuaralNumners(n-1)
//     }
// }
// console.log(sumOfNatuaralNumners(5))

// function linearSearch(arr,t){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===t){
//             return i;
//         }
        
//     }

// return -1

// }
// console.log(linearSearch([-1,2,6,8,5,4,9],9))


/////////////// recursive string reversal  /////////////////////////////////
function reverseString (str){
    if(str===""){
        return "";
    }
    return reverseString(str.slice(1)) + str[0]
}

console.log(reverseString("happy"))