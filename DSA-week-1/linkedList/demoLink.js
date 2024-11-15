class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(value){
        this.head=null
        this.size=0
    }
    isempty(){
        return this.size==0
    }
    getsize(){
        return this.size
    }

prepend(value){
    let node=new Node(value);
    if(this.isempty()){
        this.head=node
    }
    else{
        node.next=this.head
        this.head=node
    }
    this.size++
    
}
print(){
    if(this.isempty()){
        console.log("it's empty")
    }else{
        let curr=this.head;
        let listvalue="";
        while(curr){
            listvalue +=`${curr.value}`
            curr=curr.next
        }
        console.log(listvalue)
    }
}
}
const list =new LinkedList()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
list.print()



