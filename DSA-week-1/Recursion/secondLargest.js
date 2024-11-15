function rec(arr,i=0,largest= -Infinity,secondlargest= -Infinity){
    if(i>=arr.length){
        return secondlargest
    }
    if(arr[i] > largest){
secondlargest=largest
largest=arr[i];
    }
    else if(arr[i] > secondlargest && arr[i] !== largest){
        secondlargest=arr[i]
    }
    return rec(arr, i +1,largest,secondlargest)
}
const arr=[11,55,66,77,88];
console.log(rec(arr))
