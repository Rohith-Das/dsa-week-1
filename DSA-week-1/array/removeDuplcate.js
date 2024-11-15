
function removeDuplicates(arr){
    let result=[];
    for(let i=0;i<arr.length;i++){
        let isDup=false
        for(let j=0;j<result.length;j++){
            if(arr[i]===arr[j]){
                isDup=true
                break;
            }
        }
        if(! isDup){
            result.push(arr[i])
        }
    }
    return result
}
const arr=[6,5,7,6,4,8,9,6,5,2,1,2]
const finale=removeDuplicates(arr)
console.log(finale)