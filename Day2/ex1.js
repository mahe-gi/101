// Exercise 1 — sumArray

// Example:

// sumArray([1,2,3,4])

// returns:

// 10

let arr1 = [1, 2, 3, 4];

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

let ans = sumArray(arr1);
console.log(ans);