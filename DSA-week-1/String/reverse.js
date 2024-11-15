// function rev(str){
//     if(str===""){
//         return ""
//     }
//     return rev(str.slice(1))+str[0]

// }
// console.log(rev("rohit das"))

/////////////////////////////////// reverse an string without build in function //////////////////////////////

// function reverse(str){
//     if(str===""){
//         return ""
//     }
//     let res="";
//     for(let i=str.length-1;i>=0;i--){
// res+=str[i];
//     }
//     return res
// }

// console.log(reverse("dev das"))

///////////////////////////////////////////////////////////////////////////////////////

//////////     capitalize a string's first letter  ////////////////////
function cap(str){
    let words= str.split(" ");
    for(let i=0;i<words.length;i++){
        words[i]= words[i][0].toUpperCase() + words[i].slice()
    }
    return words.join(" ")
}
console.log(cap("rohit das roshow is your first projec"))