class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }
    append(value){
        let node=new Node(value)
        if(this.head === null){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }
    reverse(){
        let curr=this.head
        let pre=null
        let next=null
        while(curr !== null){
            next=curr.next
            curr.next=pre
            pre=curr
            curr=next
        }
        this.head=pre
        
    }
    print(){
        if(this.head == null){
            console.log("its empty")
        }else{
            let curr=this.head
            let result=""
            while(curr){
                result +=`${curr.value}->`
                curr=curr.next
            }
            console.log(result)
        }
    }
}
let list=new linkedlist()
list.append(1)
list.append(2)
list.append(3)
console.log("orginal array")
list.print()
console.log("after reverse")
list.reverse()
list.print()


