// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const find_cycle_start = function (head) {
    let slow=head, fast=head;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) {
            let cycleLength = find_cycle_length(slow);
            return calculateStart(head,  cycleLength)
        }
    }

    return head;
};

function find_cycle_length(slow){
    let current = slow, cycleLength=0
    do {
        slow = slow.next
        cycleLength++
    }while(current!=slow);
    return cycleLength;
}

function calculateStart(head, cycleLength){
    let pointer1=head, pointer2=head;
    while(cycleLength>0){
        pointer1 = pointer1.next;
        cycleLength--
    }
    while(pointer1!=pointer2){
        pointer1=pointer1.next
        pointer2 = pointer2.next
    }
    return pointer1;
}


let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
