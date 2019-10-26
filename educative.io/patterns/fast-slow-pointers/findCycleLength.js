class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


function find_cycle_length(head) {
    let slow = head, fast = head;

    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next;
        if (fast === slow) {
            return calculate_cycle_length(slow)
        }


    }

    return 0;
}


function calculate_cycle_length(slow) {
    let current=slow, length=0
    do {
        current = current.next;
        length++
    }while(current != slow)
    return length;
}


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);