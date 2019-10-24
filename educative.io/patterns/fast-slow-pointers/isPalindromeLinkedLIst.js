class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


const is_palindromic_linked_list = function (head) {

    if (!head || !head.next) {
        return true;
    }

    // first we find the middle of the list
    let slow = head, fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // now we have slow at half and we want to reverse the rest of it
    let headSecondHalf = reverse(slow);
    let saveHeadOfHalf = headSecondHalf;

    while (head && headSecondHalf) {
        if (head.value != headSecondHalf.value) {
            return false;
        }
        head =head.next;
        headSecondHalf = headSecondHalf.next;

    }

    reverse(saveHeadOfHalf);


    return false;
};


function reverse(head) {
    let prev;
    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

head.next.next.next.next.next = new Node(2)
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)
