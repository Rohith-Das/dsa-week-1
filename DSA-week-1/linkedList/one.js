class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
  
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    isempty(){
        return this.size==0
    }
    getSize(){
        return  this.size

    }
    prepend(value){
        let node=new Node(value)
        if(this.isempty()){
            this.head = node
        }else{
            node.next = this.head
        this.head = node  
          }
        this.size++
    }
    print(){
        if(this.isempty()){
            console.log("is empty")
        }else{
            let curr=this.head
            let Listvalue= "";
            while(curr){
                Listvalue += `${curr.value}`
                curr=curr.next
            }
            console.log(Listvalue)
        }
    }
}
const list =new LinkedList()

console.log("is empty ",list.isempty());
console.log("the sizze is ",list.getSize())
list.print()

list.prepend(10)
list.print()

list.prepend(20)
list.prepend(30)
list.print()
