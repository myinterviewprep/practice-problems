const find_happy_number = function(num) {

    if(findCycleStart(num)===1){
    return true
    }

    return false;
};


function findCycleStart(num){

    let len = findCycleLength(num)

    let pointer1=num, pointer2=num;
    for(let i=0;i<len;i++){
        pointer1 = sumSquareDigits(pointer1)
    }
    while(pointer1!==pointer2){
        pointer1 = sumSquareDigits(pointer1);
        pointer2 = sumSquareDigits(pointer2);
    }

    return pointer1;

}

function findCycleLength(num){
    let slow=num, fast=num;
    do{
        slow=sumSquareDigits(slow)
        fast = sumSquareDigits(sumSquareDigits(fast))
    }
    while(slow!==fast)

    let current = slow;
    let len =0;
    do{
        current = sumSquareDigits(current)
        len++
    }while(current!==slow)
    return len;
}

function sumSquareDigits(num){
    let snum = num.toString()
    let sum = 0;
    for(let i=0;i<snum.length;i++){
        let n = parseInt(snum[i])
        sum += n*n
    }
    return sum;
}


console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)


// console.log(sumSquareDigits(23));
// console.log(sumSquareDigits(12));
//
// console.log(findCycleLength(23));

