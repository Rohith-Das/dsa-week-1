function rev(str){
    if(str === ""){
        return ""
    }
    return rev(str.slice(1))+str[0]
}
console.log(rev("rohit"))