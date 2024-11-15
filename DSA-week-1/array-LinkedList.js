class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(value){
        this.head=null
       
    }
    arrayToLinkedList(arr){
        if(arr.length===0) return 
        this.head=new Node(arr[0])
        let curr=this.head
        for(let i=1;i<arr.length;i++){
            curr.next=new Node(arr[i])
            curr=curr.next
        }
    }
    print(){
        let currNode=this.head
        let result=""
        while(currNode){
            result +=`${currNode.value}->`
            currNode=currNode.next
        }
        console.log(result)
    }
}
const list=new LinkedList()
const arr=[1,2,3,4,5,6]
list.arrayToLinkedList(arr)
list.print()