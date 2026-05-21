// Next Exercise — reverseArray

// Without using:

// reverse()

// Example:

// [1,2,3,4]

// returns:

// [4,3,2,1]


function reverseArray(arr) {
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    return arr1;
}

let ans = reverseArray([1, 2, 3, 4]);

console.log(ans);
