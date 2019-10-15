// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// Output: [2.2, 2.8, 2.4, 3.6, 2.8]

// brute force
function findAveragesOfSubarraysBruteForce(arr, k) {

    let answer = [];
    for (let i = 0; i <= arr.length - k; i++) {

        let sum = 0;
        for (let j = i; j < k + i; j++) {
            console.log("j:", j);
            sum += arr[j]
        }
        answer.push(sum / k)

        console.log("answer:", answer);

    }

    return answer;
}

// sliding window
function findAverageOfSubarrays(arr, k){

    let answer=[]
    let sum=0;

    let startIndex=0;
    for (let right=0;right<arr.length;right++){

        // always add the next element
        sum += arr[right]

        if (right >= k-1) {
            answer.push(sum / k);
            sum-=arr[startIndex]
            startIndex++;
        }


    }

    // this is way easier for me to wrap my head around
    // for (let i=0;i<k;i++){
    //     sum+=arr[i]
    // }
    //
    // answer.push(sum/k)
    //
    // for (let i=k;i<arr.length;i++){
    //     sum = sum + arr[i] - arr[i-k]
    //     answer.push(sum/k)
    // }

    return answer;

}

console.log(findAveragesOfSubarraysBruteForce([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))
console.log(findAverageOfSubarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))