function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    var i=0;
    let answer=true;

    // Check if we're serving orders first-come, first-served
    while (i<servedOrders.length) {

        let currentOrder = servedOrders[i]

        // console.log("currentOrder:", currentOrder)

        if (takeOutOrders.length && currentOrder == takeOutOrders[0]) {
            // console.log("match take out order")
            takeOutOrders.shift()
            i++
        }
        else if (dineInOrders.length && currentOrder == dineInOrders[0]) {
            // console.log("match dine in order")
            dineInOrders.shift()
            i++
        }
        else{
            // console.log("doesn't match anything")
            answer = false;
            break;
        }

        if (dineInOrders.length || takeOutOrders.length) {
            answer = false;
        }


    }


    return answer;
}


// Tests

let desc = 'both registers have same number of orders';
let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = 'registers have different lengths';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'one register is empty';
actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = 'served orders is missing orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'served orders has extra orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

desc = 'one register has extra orders';
actual = isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8]);
assertEquals(actual, false, desc);

desc = 'one register has unserved orders';
actual = isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]);
assertEquals(actual, false, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}