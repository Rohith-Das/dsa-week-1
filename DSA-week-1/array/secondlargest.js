// const arr=[2,11,4,55,6,77,90];
// let largest=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest)
//     largest = arr[i]
// }
// console.log('this is largest element in this array',largest)


// second largest
const arr=[2,11,4,55,6,77,90];
let n= arr.length;

function Findsecondlargest(arr){
    
    if(arr.legnth<2){
        console.log("morethan 2 elements needed")
    }
    let largest=arr[0];
let secondlargest=arr[0];

for(let i=1;i<n;i++){
    if(arr[i]>largest){
         secondlargest=largest;
         largest=arr[i];
    }else if(arr[i]>secondlargest && arr[i] !== largest){
        secondlargest=arr[i];
    }
}
if(secondlargest === largest){
    console.log("no second largest element in this array")
}
return secondlargest
}

console.log("this is second largest value in this array :",Findsecondlargest(arr))