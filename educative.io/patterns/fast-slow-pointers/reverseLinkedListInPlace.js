class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const reverse = (head) => {

    console.log("head:", head);


    let prev = null;
    while(head){
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }


    console.log("prev:", prev);

    return prev;

}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`reersed: ${JSON.stringify(reverse(head))}`)
