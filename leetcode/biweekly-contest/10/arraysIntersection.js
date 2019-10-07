/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {

    var answer = [];
    outerloop:
    for (var i = 0; i < arr1.length; i++) {

        var j = 0;
        var value = arr1[i];
        var inArr2;
        var inArr3;

        // console.log("value:", value);

        innerloop:
        for (var j =0;j<arr2.length && j<arr3.length;j++){


            // console.log("j:", j);
            // console.log("v1:", arr2[j], "v2:", arr3[j]);


            if (value < arr2[j] && value < arr3[j]) {
                inArr2 = false;
                inArr3 = false;
                break innerloop;
            }

            if (value == arr2[j]) {
                // console.log("inArr2");
                inArr2 = true;
            }
            if (value == arr3[j]) {
                // console.log("inArr3");
                inArr3 = true;
            }

            if (inArr2 && inArr3) {
                // console.log("push value:", value);
                answer.push(value);
                inArr2 = false;
                inArr3 = false;
                break innerloop;
            }

        }

    }

    return answer;


};



var answer = arraysIntersection([1, 2, 3, 4, 5],
    [1, 2, 5, 7, 9],
    [1, 3, 4, 5, 8]);
console.log(answer);