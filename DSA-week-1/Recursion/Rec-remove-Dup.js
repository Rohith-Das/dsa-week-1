function recursiveDupicate(arr,index=0,result=[]){
    if(index === arr.length){
        return result;
    }
    let isDup = false
    for(let i=0;i<result.length;i++){
        if(arr[index]===result[i]){
            isDup =true
            break;
        }
    }
    if(!isDup){
        result.push(arr[index])
    }
    return recursiveDupicate(arr,index + 1,result)
}
const arr=[1,2,3,4,5,1,2,3,4]
const final=recursiveDupicate(arr)
console.log(final)