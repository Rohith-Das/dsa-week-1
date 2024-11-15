// function binarySearch(arr,t){
//     let start=0;
//     let end =arr.length-1;

//     while(start<=end){
//         let mid=Math.floor((start + end)/2);
     
//         if (arr[mid]>t){
//             end =mid-1

//         }
//         else if(arr[mid]<t){
//             start=mid+1
//         }
//         else if(arr[mid]===t){
//             return mid
//         }
//     }
//     return -1
// }

// console.log(binarySearch([1, 2, 3, 4], 1)) // 1
// console.log(binarySearch([1, 2, 3, 5, 9], 4)) // -1
// console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
// console.log(binarySearch([0, 3], 3)) // 1


/////////////////// binary search using recursion ////////////////////////
// function binary(arr,t,start=0,end=arr.length-1){
//     if(start>end){
//         return -1
//     }
//     let mid=Math.floor((start+end)/2);
//     if(arr[mid]==t){
//         return mid
//     }
//     if(arr[mid]>t){
//         return binary(arr,t,start,mid-1)
//     }
//     return binary(arr,t,mid+1,end)
// }
// console.log(binary([1,2,3,4,5,6],5))




// Problem:
// Given a sorted array, find the first and last occurrence of a target element.

function firstOcc(arr,t){
    let start=0;
    let end=arr.length-1;
    let result=-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid]==t){
            result= mid;
            end=mid=1
        }
        else if(arr[mid]<t){
            start=mid+1
        }
       else{
        end=mid-1
       }
    }
    return result
}
function lastOcc(arr,t){
    let start=0;
    let end =arr.length-1;
    let result=-1
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid]===t){
            result=mid;
            start=mid+1
        }
        else if(arr[mid]<t){
            start=mid+1
        }
      else{
        end=mid-1
      }
    }
    return result
}
function ans(arr,t){
const first=firstOcc(arr,t);
const last=lastOcc(arr,t);
return [first,last]
}
const arr=[1,2,3,4,5,6,7,8];
const t=5
const result=ans(arr,t)
console.log(`first occurrence ${result[0]},last occurrence ${result[1]}`)
