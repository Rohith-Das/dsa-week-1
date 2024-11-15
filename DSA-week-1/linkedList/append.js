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
        return this.size==0;
    }
    getsize(){
        return this.size
    }
    prepand(value){
        let node=new Node(value)
        if(this.isempty()){
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
            
        }
        this.size++
    }
    append(value){
        let node=new Node(value)
        if(this.isempty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node

        }
        this.size++
    }

    print(){
        if(this.isempty()){
            console.log("it empty")
        }else{
            let curr=this.head
            let listvalue=""
            while(curr){
                listvalue +=`${curr.value} `
                curr=curr.next
            }
            console.log(listvalue)
        }
    }
}

const list=new LinkedList()
list.prepand(1)
list.prepand(6)
list.prepand(9)
list.print()
list.append(100)
list.prepand(1)
list.prepand(1)
list.prepand(1)
list.prepand(1)
list.print()
list.append(107)
list.print()