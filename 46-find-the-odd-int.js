
//
function findOdd(arr) {
    const numsAndCounts = {};

    // Count occurrences of each number in the array
    for (const num of arr) {
        if (numsAndCounts[num]) {
            numsAndCounts[num]++;
        } else {
            numsAndCounts[num] = 1;
        }
    }

    // Find the number with an odd occurrence
    for (const [key, value] of Object.entries(numsAndCounts)) {
        if (value % 2 !== 0) {
            return parseInt(key);
        }
    }
}
