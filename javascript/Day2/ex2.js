// Exercise — maxElement

// Example:

// maxElement([3,7,2,9,1])

// returns:

// 9


function maxElement(val) {

    let max = val[0];

    for (let i = 1; i < val.length; i++) {
        if (val[i] > max) {
            max = val[i];
        }
    }
    return max;

}


const ans = maxElement([3, 7, 2, 9, 1]);

console.log(ans);