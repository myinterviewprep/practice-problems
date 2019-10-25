class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


const is_palindromic_linked_list = function (head) {
    console.log("head:", JSON.stringify(head));
    let is = true;


    // find middle first
    let fast = head, slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let middle = slow;


    let headReversed = reverse(middle);

    console.log("head:", JSON.stringify(head));
    console.log("headReversed:", JSON.stringify(headReversed));

    let saveHeadReversed = headReversed;


    while (headReversed && head) {

    console.log("headReversed.val:", headReversed.value);
    console.log("head.val", head.value);

        if (headReversed.value !== head.value) {
            is = false;
            break;
        }

        headReversed = headReversed.next
        head = head.next
    }

    // reverse back
    reverse(saveHeadReversed);


    return is;
};


function reverse(head) {
    let prev = null;
    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

let head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

head.next.next.next.next.next = new Node(2)
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)
