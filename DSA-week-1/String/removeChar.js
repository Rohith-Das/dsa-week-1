function removeChar(str,Remove,index=0){
    if(index == str.length){
        return ""
    }
    if(str[index]===Remove){
        return removeChar(str,Remove,index + 1)
    }else{
        return str[index] + removeChar(str,Remove,index + 1)
    }
}
const result=removeChar("rohit das","s")
console.log(result)